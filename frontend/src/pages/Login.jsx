import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "@/components/ui/button"
import { useState } from "react"
import Axios from 'axios'

const Login = ({ fetchFriends }) => {

  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [resourcelink,setResourcelink]=useState("");
  const [imagelink,setImagelink]=useState("");

  const addFriend = () => {
    // Split the description into words
    const words = description.trim().split(/\s+/);
    
    // Check if the word count exceeds 50
    if (words.length > 40) {
      alert("Description should not exceed 50 words.");
      return; // Exit the function early if the condition is met
    }
    if(words.length<20) {
      alert("Description should be of atleast 20 words");
      return; // Exit the function early if the condition is met
    }
  
    // Proceed with adding the friend if the description is within the limit
    Axios.post('https://devdirectory-backend.onrender.com/addfriend', { name: name, resourcelink: resourcelink, description: description,imagelink:imagelink})
      .then(() => {
        alert("Friend added successfully");
        // Fetch updated list of friends by calling the function passed as a prop
        fetchFriends();
      })
      .catch(() => {
        alert("Failed to add friend");
        console.log({ name: name, resourcelink: resourcelink, description: description})
      });
  }
  
  

  return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of the Resource" onChange={(event)=>{
        setName(event.target.value)}}/>
          </div>
          <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Resource Link</Label>
          <Input id="name" placeholder="Link to the Resource" onChange={(event)=>{
      setResourcelink(event.target.value)}}/>
        </div>
          <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Description</Label>
          <Input id="age" placeholder="Enter Description related to Resource" onChange={(event)=>{
            setDescription(event.target.value)}}/>

          </div>
          <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Enter Image Link</Label>
          <Input id="age" placeholder="Enter img link" onChange={(event)=>{
            setImagelink(event.target.value)}}/>

          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button onClick={addFriend}>Submit</Button>
    </CardFooter>
  </Card>
  )
}

export default Login
