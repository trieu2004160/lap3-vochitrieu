/* eslint-disable no-unused-vars */
import { useForm, isEmail, hasLength } from "@mantine/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const form = useForm({
    mode: "uncontrolled", // Chế độ uncontrolled
    initialValues: { email: "", password: "" },
    validate: {
      email: isEmail("Invalid email"), // Email phải đúng định dạng
      password: hasLength({ min: 6 }, "Password must be at least 6 characters"), // Mật khẩu ít nhất 6 ký tự
    },
  });

  // const [submittedValues, setSubmittedValues] = useState<
  //   typeof form.values | null
  // >(null);

  return (
    <div className="bg-sky-100 flex min-h-screen">
      {/* Left: Image */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={form.onSubmit((values) => {
                // setSubmittedValues(values);
                console.log("Submitted values:", values);
              })}
            >
              {/* Email Input */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...form.getInputProps("email")}
                  key={form.key("email")}
                  type="email"
                  placeholder="Enter your email"
                  aria-invalid={!!form.errors.email}
                />
                {form.errors.email && (
                  <p className="text-red-500 text-sm">{form.errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...form.getInputProps("password")}
                  key={form.key("password")}
                  type="password"
                  placeholder="Enter your password"
                  aria-invalid={!!form.errors.password}
                />
                {form.errors.password && (
                  <p className="text-red-500 text-sm">{form.errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign In
              </Button>

              {/* Sign Up Link */}
              <div className=" text-sm flex gap-x-1 justify-center">
                <div>Don't have an account? </div>
                <a href="/register" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </div>
            </form>

            {/* Hiển thị dữ liệu đã nhập
            {submittedValues && (
              <div className="mt-4 p-3 bg-gray-100 rounded">
                <p className="text-sm font-semibold">Submitted values:</p>
                <pre className="text-xs">
                  {JSON.stringify(submittedValues, null, 2)}
                </pre>
              </div>
            )} */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
