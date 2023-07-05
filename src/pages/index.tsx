import Image from "next/image";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout metadata={{ title: "Welcome" }}>
      Home Page
      <Button variant="outline">Button</Button>
      <img
        // src="https://placehold.co/1600x900"
        srcSet="https://placehold.co/160x90 160w, https://placehold.co/320x180 320w, https://placehold.co/800x450 800w, https://placehold.co/1600x900 1600w"
        alt=""
        style={{ width: "100%" }}
      />
    </Layout>
  );
}
