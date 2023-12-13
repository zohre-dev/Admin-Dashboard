
"use server";
import { revalidatePath } from "next/cache";
import { User, Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";





// *****************      User              **********************
export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete user!");
    }

    revalidatePath("/dashboard/users");

};

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();
        const updateFeilds = {
            username, email, password, phone, address, isAdmin, isActive
        }
        Object.keys(updateFeilds).forEach(
            (key) =>
                updateFeilds[key] === "" || undefined) && delete updateFeilds[key];

        await User.findByIdAndUpdate(id, updateFeilds)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};


// *****************      Product              **********************
export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete product!");
    }

    revalidatePath("/dashboard/products");

};

export const updateProduct = async (formData) => {
    console.log("formData :", formData)
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);
    console.log("title:", title);

    try {
        connectToDB();
        const updateFeilds = { title, desc, price, stock, color, size }
        Object.keys(updateFeilds).forEach(
            (key) =>
                updateFeilds[key] === "" || undefined || null) && delete updateFeilds[key];

        await Product.findByIdAndUpdate(id, updateFeilds)
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

// ***************** **********************


export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData)
    // try {
        await signIn("credentials", { username, password });

    // } catch (err) {
    //     console.log(err);
    //     throw new Error(err);
    // }

}








