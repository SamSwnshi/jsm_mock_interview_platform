'use server'

import { auth, db } from "@/firebase/admin"
import { cookies } from "next/headers"

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams){
    const {uid,name,email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get()

        if(userRecord.exists){
            return {
                success: false,
                message: "User already exists. Please Sign in instead"
            }
        }

        await db.collection('users').doc(uid).set({
            name,email
        })

        return {
            success: true,
            message: "Account Created Successfully. Please Sign In."
        }
    } catch (e: unknown) {
        console.log("Error creating a user", e)

        if(e && typeof e === 'object' && 'code' in e && e.code === 'auth/email-already-exists'){
            return {
                success : false,
                message: 'This email is already in Use'
            }
        }

        return {
            success: false,
            message: "Failed to create an account!"
        }
    }


}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    // Verify the ID token first
    await auth.verifyIdToken(idToken);
    
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord)
      return {
        success: false,
        message: "User does not exist. Create an account.",
      };

    await setSessionCookie(idToken);
    
    return {
      success: true,
      message: "Sign in successful",
    };
  } catch (error: unknown) {
    console.log("Sign in error:", error);
    
    // Check for specific Firebase auth errors
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'auth/invalid-credential') {
        return {
          success: false,
          message: "Invalid credentials. Please check your email and password.",
        };
      }
      
      if (error.code === 'auth/user-not-found') {
        return {
          success: false,
          message: "User does not exist. Create an account.",
        };
      }
    }

    return {
      success: false,
      message: "Failed to log into account. Please try again.",
    };
  }
}


export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies()

    const sessionCookie = await auth.createSessionCookie(idToken,{
        expiresIn: ONE_WEEK * 1000,

    })
    cookieStore.set('session',sessionCookie,{
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: '/',
        sameSite: 'lax'
    })
}