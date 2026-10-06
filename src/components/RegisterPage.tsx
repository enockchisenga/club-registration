import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Building2, ArrowLeft } from "lucide-react";
import { districtConfigs } from "@/lib/data";
import { User as UserType } from "@/types";

interface RegisterPageProps {
  onRegister: (userData: Omit<UserType, "id" | "status" | "createdAt">) => void;
  onBack: () => void;
}

export function RegisterPage({ onRegister, onBack }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
    district: "",
    role: "REGISTRATION OFFICER",
  });
  const [error, setError] = useState("");

  const selectedDistrict = districtConfigs.find(d => d.district === formData.district);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!selectedDistrict) {
      setError("Please select a district");
      return;
    }
    onRegister({
      fullName: formData.fullName,
      username: formData.username,
      phone: formData.phone,
      password: formData.password,
      district: formData.district,
      localAuthority: selectedDistrict.localAuthority,
      role: formData.role,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </button>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Create Account</CardTitle>
            <CardDescription>
              Register your institution account. The local authority will be assigned automatically based on your district.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0977123456"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Select
                    value={formData.district}
                    onValueChange={(value) => setFormData({ ...formData, district: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select district" />
                    </SelectTrigger>
                    <SelectContent>
                      {districtConfigs.map((d) => (
                        <SelectItem key={d.district} value={d.district}>
                          {d.district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Local Authority (Auto-assigned)</Label>
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      {selectedDistrict ? selectedDistrict.localAuthority : "Select a district to auto-assign"}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">User Role</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ADMINISTRATOR">Administrator</SelectItem>
                      <SelectItem value="REGISTRATION OFFICER">Registration Officer</SelectItem>
                      <SelectItem value="CERTIFICATE OFFICER">Certificate Officer</SelectItem>
                      <SelectItem value="REPORTS OFFICER">Reports Officer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>
              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}