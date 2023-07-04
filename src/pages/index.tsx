import Image from "next/image";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout metadata={{ title: "Welcome" }}>
      Home Page
      <Button variant="outline">Button</Button>
    </Layout>
  );
}
