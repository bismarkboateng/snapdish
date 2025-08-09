"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { ProfileInfoForm } from "./profile-info-form";
import { Pencil, X } from "lucide-react";

const UserProfileComponent = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-medium">Profile Information</CardTitle>
          <Button
            variant="outline"
            onClick={() => setIsEditing((prev) => !prev)}
            className="cursor-pointer"
          >
            {isEditing ? <X className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6 w-full">  
          <ProfileInfoForm isEditing={isEditing} />
        </CardContent>
      </Card>
    </section>
  );
};

export default UserProfileComponent;
