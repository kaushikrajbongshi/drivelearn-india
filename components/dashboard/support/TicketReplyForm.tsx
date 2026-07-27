"use client";

import { MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

export default function TicketReplyForm() {
    function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        // TODO:
        // React Hook Form
        // Zod Validation
        // API
        // Toast
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Reply to Ticket
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-2">
                        <Label htmlFor="reply">
                            Reply Message
                        </Label>

                        <Textarea
                            id="reply"
                            rows={6}
                            placeholder="Write your reply..."
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit">
                            <MessageSquare className="mr-2 size-4" />
                            Send Reply
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}