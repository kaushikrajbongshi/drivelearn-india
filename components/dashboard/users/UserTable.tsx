"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { User } from "@/features/admin/users/types/user";

import UserActions from "./UserActions";
import UserRoleBadge from "./UserRoleBadge";
import UserStatusBadge from "./UserStatusBadge";

interface UserTableProps {
  users: User[];
}

export default function UserTable({
  users,
}: UserTableProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden rounded-xl border p-5 lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="w-16 text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-10">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />

                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium">
                        {user.name}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>
                  {user.phone}
                </TableCell>

                <TableCell>
                  <UserRoleBadge role={user.role} />
                </TableCell>

                <TableCell>
                  <UserStatusBadge status={user.status} />
                </TableCell>

                <TableCell>
                  {user.joinedAt}
                </TableCell>

                <TableCell>
                  {user.lastActive}
                </TableCell>

                <TableCell className="text-right">
                  <UserActions userId={user.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <div className="space-y-4 lg:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src={user.avatar}
                    alt={user.name}
                  />

                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">
                    {user.name}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </div>

              <UserActions userId={user.id} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <UserRoleBadge role={user.role} />
              <UserStatusBadge status={user.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">
                  Phone
                </p>

                <p>{user.phone}</p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  Joined
                </p>

                <p>{user.joinedAt}</p>
              </div>

              <div className="col-span-2">
                <p className="text-muted-foreground">
                  Last Active
                </p>

                <p>{user.lastActive}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}