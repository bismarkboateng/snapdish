import React from "react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Textarea } from "@/components/atoms/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select";
import { Label } from "@/components/atoms/label";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-sm font-medium text-[var(--color-text-primary)]"
          >
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-sm font-medium text-[var(--color-text-primary)]"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-medium text-[var(--color-text-primary)]"
        >
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className="text-sm font-medium text-[var(--color-text-primary)]"
        >
          Subject
        </Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="partnership">
              Partnership Opportunities
            </SelectItem>
            <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
            <SelectItem value="media">Media & Press</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-sm font-medium text-[var(--color-text-primary)]"
        >
          Message
        </Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us how we can help you..."
          className="w-full resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full px-6 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
