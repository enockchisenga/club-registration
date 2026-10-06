import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Club, Member } from "@/types";
import { useState } from "react";

interface RegisteredClubsProps {
  clubs: Club[];
  members: Member[];
  onAddMember: (clubId: string, memberData: Omit<Member, "id" | "clubId">) => void;
}

export function RegisteredClubs({ clubs, members, onAddMember }: RegisteredClubsProps) {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    nrc: "",
    dateOfBirth: "",
    phone: "",
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedClub) {
      onAddMember(selectedClub, newMember);
      setShowAddMember(false);
      setNewMember({ name: "", position: "", nrc: "", dateOfBirth: "", phone: "" });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Registered Clubs</h1>
        <p className="text-slate-600">View and manage all registered clubs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <Card key={club.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{club.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p className="text-slate-600">Ward: <span className="font-medium text-slate-900">{club.ward}</span></p>
                <p className="text-slate-600">Village: <span className="font-medium text-slate-900">{club.village}</span></p>
                <p className="text-slate-600">Certificate: <span className="font-medium text-emerald-600">{club.certificate}</span></p>
                <p className="text-slate-600">Members: <span className="font-medium text-slate-900">{members.filter(m => m.clubId === club.id).length}</span></p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedClub(club.id);
                    setShowAddMember(true);
                  }}
                >
                  Add Member
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showAddMember && selectedClub && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add Member</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddMember} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="memberName">Member Name</Label>
                  <Input
                    id="memberName"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={newMember.position}
                    onChange={(e) => setNewMember({ ...newMember, position: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nrc">NRC</Label>
                  <Input
                    id="nrc"
                    value={newMember.nrc}
                    onChange={(e) => setNewMember({ ...newMember, nrc: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={newMember.dateOfBirth}
                    onChange={(e) => setNewMember({ ...newMember, dateOfBirth: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={newMember.phone}
                    onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    Add Member
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddMember(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}