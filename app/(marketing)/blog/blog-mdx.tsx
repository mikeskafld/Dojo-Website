import React from "react"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { highlight } from "sugar-high"

interface TableData {
  headers: string[]
  rows: string[][]
}

function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type CustomLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  [key: string]: string | React.ReactNode | undefined
}

function CustomLink(props: CustomLinkProps) {
  const { href, ...rest } = props

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a href={href} {...rest} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

function RoundedImage(props: ImageProps) {
  const { alt = "", ...rest } = props
  return <Image className="rounded-lg" alt={alt} {...rest} />
}

function Code({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children as string)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string | React.ReactNode): string {
  if (!str) return ""
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: React.ComponentProps<typeof MDXRemote>) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
