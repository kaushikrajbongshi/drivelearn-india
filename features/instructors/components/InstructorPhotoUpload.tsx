"use client";

import { useRef, useState } from "react";
import { Camera, ImagePlus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface InstructorPhotoUploadProps {
    avatar?: string;
}

export default function InstructorPhotoUpload({
    avatar,
}: InstructorPhotoUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(
        avatar ?? null
    );

    function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) return;

        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
    }

    function handleRemove() {
        setPreview(null);

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return (
        <section className="space-y-4">
            <div>
                <h3 className="text-base font-semibold">
                    Profile Photo
                </h3>

                <p className="text-sm text-muted-foreground">
                    Upload the instructor's profile photo.
                </p>
            </div>

            <div className="rounded-xl border p-6">
                <div className="flex flex-col items-center gap-5 md:flex-row">
                    {/* Preview */}
                    <div className="flex size-28 items-center justify-center overflow-hidden rounded-xl border bg-muted">
                        {preview ? (
                            <img
                                src={preview}
                                alt="Instructor"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <Camera className="size-10 text-muted-foreground" />
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex-1 space-y-3">
                        <div>
                            <p className="font-medium">
                                Instructor Photo
                            </p>

                            <p className="text-sm text-muted-foreground">
                                PNG, JPG or WebP up to 2MB.
                            </p>
                        </div>

                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />

                        <div className="flex flex-wrap gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                    inputRef.current?.click()
                                }
                            >
                                <ImagePlus className="mr-2 size-4" />
                                Upload Photo
                            </Button>

                            {preview && (
                                <Button
                                    type="button"
                                    variant="destructive"
                                    onClick={handleRemove}
                                >
                                    <Trash2 className="mr-2 size-4" />
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}