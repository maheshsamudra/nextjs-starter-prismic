import React from "react";
import Link from "next/link";

export default function StyledButton({
  onClick = () => null,
  type = "button",
  href = "",
  title = "",
}) {
  if (isInternalLink(href)) {
    return <Link href={href}>{title}</Link>;
  } else if (isExternalLink(href)) {
    return <Link href={href}>{title}</Link>;
  }
  return <button onClick={onClick}>{title}</button>;
}

const isInternalLink = (href = "") => {
  if (!href) return false;

  return !href?.toLowerCase()?.startsWith("http");
};

const isExternalLink = (href = "") => {
  if (!href) return false;
  return href?.toLowerCase()?.startsWith("http");
};
