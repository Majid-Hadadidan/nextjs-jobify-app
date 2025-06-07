import { Control, FieldValues, FieldPath } from "react-hook-form"; // Import FieldPath
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Make the props generic
type CustomFormFieldProps<T extends FieldValues> = {
  name: FieldPath<T>; // Use FieldPath for type safety on the name
  control: Control<T>; // Use the generic type T for control
};

export function CustomFormField<T extends FieldValues>({
  name,
  control,
}: CustomFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

// Make the props generic
type CustomFormSelectProps<T extends FieldValues> = {
  name: FieldPath<T>; // Use FieldPath for type safety on the name
  control: Control<T>; // Use the generic type T for control
  items: string[];
  labelText?: string;
};

// Apply the generic type
export function CustomFormSelect<T extends FieldValues>({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item) => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export default CustomFormSelect;
