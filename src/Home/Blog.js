import React from "react";

const Blog = () => {
  return (
    <div className="px-6 text-justify">
      <span className="text-3xl text-red-500">
        1.Different ways to manage react state:
      </span>
      <span>
        There are four main types of state you need to properly manage in your
        React apps: Local state Global state Server state URL state Let's cover
        each of these in detail: Local (UI) state Local state is data we manage
        in one or another component. Local state is most often managed in React
        using the useState hook. For example, local state would be needed to
        show or hide a modal component or to track values for a form component,
        such as form submission, when the form is disabled and the values of a
        form’s inputs. Global (UI) state Global state is data we manage across
        multiple components. Global state is necessary when we want to get and
        update data anywhere in our app, or in multiple components at least. A
        common example of global state is authenticated user state. If a user is
        logged into our app, it is necessary to get and change their data
        throughout our application. Sometimes state we think should be local
        might become global. Server state Data that comes from an external
        server that must be integrated with our UI state. Server state is a
        simple concept, but can be hard to manage alongside all of our local and
        global UI state. There are several pieces of state that
      </span>
      <br />
      <span className="text-3xl text-red-500">
        2.Prototypal Inheritence Working Process:
      </span>{" "}
      <span>
        2.JavaScript is a prototype-based, Object Oriented programming language.
        After the ES6 updates, JavaScript allowed for “prototypal inheritance”,
        meaning that objects and methods can be shared, extended, and copied.
        Sharing amid objects makes for easy inheritance of structure (data
        fields), behavior (functions / methods), and state (data values).
        JavaScript is the most common of the prototype-capable languages, and
        its capabilities are relatively unique. When used appropriately,
        prototypical inheritance in JavaScript is a powerful tool that can save
        hours of coding. Today, we want to get you acquainted with prototypal
        inheritance in JavaScript to get you up to date with the ES6
        capabilities.
      </span>
      <br />
      <span className="text-3xl text-red-500">3.Unit Test:</span>{" "}
      <span>
        3.Unit testing is a software development process in which the smallest
        testable parts of an application, called units, are individually and
        independently scrutinized for proper operation. This testing methodology
        is done during the development process by the software developers and
        sometimes QA staff. The main objective of unit testing is to isolate
        written code to test and determine if it works as intended. Unit testing
        is an important step in the development process, because if done
        correctly, it can help detect early flaws in code which may be more
        difficult to find in later testing stages
      </span>
      <br />
      <span className="text-3xl text-red-500">
        4.React Vs Angular Vs Vue:
      </span>
      <span>
        4.still gets updates, we will focus the discussion on Angular. vue logo
        Vue, also known as Vue.js, is the youngest member of the group. It was
        developed by ex-Google employee Evan You in 2014. Over the last several
        years, Vue has seen a substantial shift in popularity, even though it
        doesn’t have the backing of a large company. The most current version is
        always announced on the official Vue website on their releases page.
        Contributors for Vue are supported by Patreon. It should be noted that
        Vue also has its own GitHub repo, and functions using TypeScript.
        Further reading: Vue.js Tutorial for Beginner Developers react logo
        React, developed by Facebook, was initially released in 2013. Facebook
        uses React extensively in their products (Facebook, Instagram, and
        WhatsApp). Similar to Vue, the React developers also announce their
        newest version on the blog section of the React website.
      </span>
    </div>
  );
};

export default Blog;
