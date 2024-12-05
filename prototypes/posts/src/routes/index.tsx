import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { mapPost } from "~/logic/posts/PostMapper";
import jsonData from '../logic/posts/testPost.json';

export default component$(() => {

  const postElements = mapPost(jsonData);

  return (
    <>
      {postElements}
    </>
  )
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
