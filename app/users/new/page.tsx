"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  //creating a instance to use a programmatic navigation with router.
  const router = useRouter();

  return (
    // creating such a way that submmitting a new user form here will navigate to new page that means,, when user fill up the form for new user account, and when we submit this new user form, have to go to or navigate to the new page or users page.
    // this a client component, because it's a click event when submitting form, so needs to convert to cleint side.
    <div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        {" "}
        Create User
      </button>
      {/* it directs where to navigate after submit the form. */}
    </div>
  );
};

export default NewUsersPage;
