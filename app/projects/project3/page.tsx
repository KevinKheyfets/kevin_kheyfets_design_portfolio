import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Project3() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Project 3</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Project 3"
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="mb-4">
            Detailed description of Project 3. Explain the purpose, goals, and significance of the project.
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Technology 1</li>
            <li>Technology 2</li>
            <li>Technology 3</li>
            <li>Technology 4</li>
            <li>Technology 5</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Project 3 Image 1"
                className="rounded-lg object-cover w-full"
              />
              <p className="mt-2 text-sm text-gray-600">Caption for Image 1</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Project 3 Image 2"
                className="rounded-lg object-cover w-full"
              />
              <p className="mt-2 text-sm text-gray-600">Caption for Image 2</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                width={300}
                height={200}
                alt="Project 3 Image 3"
                className="rounded-lg object-cover w-full"
              />
              <p className="mt-2 text-sm text-gray-600">Caption for Image 3</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Project Outcomes</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Outcome 1</li>
          <li>Outcome 2</li>
          <li>Outcome 3</li>
          <li>Outcome 4</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Enhancement 1</li>
          <li>Enhancement 2</li>
          <li>Enhancement 3</li>
          <li>Enhancement 4</li>
        </ul>
      </div>
      {/* <div className="mt-8 text-center">
        <Link href="/#contact" passHref>
          <Button>Contact for More Information</Button>
        </Link>
      </div> */}
    </div>
  )
}