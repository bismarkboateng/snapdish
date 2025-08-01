"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import { Upload } from "lucide-react";

export const ProfileImageUpload = () => {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-20 w-20">
        <AvatarImage src="/avatar-placeholder.jpg" alt="Profile photo" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Button variant="secondary" className="flex gap-2 items-center">
        <Upload className="w-4 h-4" />
        Upload New Photo
      </Button>
    </div>
  );
};
