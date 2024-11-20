import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

// Dynamically import the ContactForm component
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center">
          <Link className="flex items-center justify-center" href="#">
            <span className="ml-2 text-lg font-semibold">Kevin Kheyfets</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#skills">
              Skills
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Engineering Design Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Showcasing innovative projects and technical skills in engineering design.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>Brief description of Project 1</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Project 1"
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Short overview of Project 1 and its key features.
                  </p>
                  <Link href="/projects/project1" passHref>
                    <Button className="mt-4" variant="outline">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>Brief description of Project 2</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Project 2"
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Short overview of Project 2 and its key features.
                  </p>
                  <Link href="/projects/project2" passHref>
                    <Button className="mt-4" variant="outline">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>Brief description of Project 3</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    width={300}
                    height={200}
                    alt="Project 3"
                    className="rounded-lg object-cover w-full"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Short overview of Project 3 and its key features.
                  </p>
                  <Link href="/projects/project3" passHref>
                    <Button className="mt-4" variant="outline">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                    <li>Skill 5</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Soft Skill 1</li>
                    <li>Soft Skill 2</li>
                    <li>Soft Skill 3</li>
                    <li>Soft Skill 4</li>
                    <li>Soft Skill 5</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    <li>Certification 1</li>
                    <li>Certification 2</li>
                    <li>Certification 3</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Me</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Kevin Kheyfets. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="https://github.com/KevinKheyfets" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="https://www.linkedin.com/in/kevin-kheyfets-6670052b3" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="mailto:kheyfetskevin@gmail.com">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}