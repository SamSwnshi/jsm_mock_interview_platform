import React from 'react'
import {

    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Controller } from 'react-hook-form';
const FormField = () => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ filed }) => (

                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )
            }

        />
    )
}

export default FormField
