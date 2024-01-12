import Hero from "@/app/hero";
import { Navbar } from "./navbar";

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
    <Hero />
      {children}
    </>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export { AppLayout };