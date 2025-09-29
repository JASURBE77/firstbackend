import { Router } from "express";
import users from "../models/user.model.js";

const router = Router()


router.post("/create/user", async (req ,res) => {
  try{
      const { name, surname, phone } = req.body;
    const user = new users({
        name , surname , phone
    }) ;
    await user.save()
    res.status(201).json({ message: "yangi foydalanuvchi qoshildi", user })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

router.get("/" , async (req , res) =>{
    const usersde = await users.find();
    res.json(usersde)
    
})


export default router