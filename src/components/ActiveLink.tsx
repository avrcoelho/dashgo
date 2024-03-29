import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) => {
  let isActive = false;
  const router = useRouter();

  if (
    shouldMatchExactHref &&
    (router.asPath === rest.href || router.asPath === rest.as)
  ) {
    isActive = true;
  }

  if (
    (!shouldMatchExactHref && router.asPath.startsWith(String(rest.href))) ||
    router.asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
};
