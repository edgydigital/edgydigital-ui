"use client";
import React, { ReactNode } from "react";
import { ButtonHTMLAttributes, forwardRef, LegacyRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("uppercase font-bold px-4 rounded-medium", {
  variants: {
    intent: {
      primary: "bg-black text-white",
      secondary: "bg-blue-500 text-white",
    },
    size: {
      medium: ["h-[50px]"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonVariant = VariantProps<typeof buttonVariants>;

const buttonStyle = (
  variant: ButtonVariant["intent"],
  className: string | undefined
) => twMerge(buttonVariants({ intent: variant, className }));

interface Props {
  children: ReactNode;
  LoadingIcon?: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant["intent"];
  onClick?: () => void;
}

export default function Button({
  children,
  isLoading,
  LoadingIcon,
  isDisabled,
  variant,
  className,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle(variant, className)} ${
        isDisabled ? "!transform-none !bg-gray-400 !transition-none" : ""
      } ${
        isLoading || isDisabled ? "cursor-not-allowed hover:transform-none" : ""
      }`}
    >
      {isLoading ? (
        <>
          {LoadingIcon || (
            <div className="animate-spin">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 39472">
                  <g id="Subtract">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1306 0.86719C12.1282 0.867188 12.1257 0.867188 12.1232 0.867188C5.97463 0.867188 0.990219 5.8516 0.990219 12.0002C0.990219 18.1488 5.97463 23.1332 12.1232 23.1332C17.453 23.1332 21.9081 19.3879 23.0001 14.3856H20.5453C19.5069 18.0572 16.1312 20.7475 12.1271 20.7475C7.29607 20.7475 3.37974 16.8312 3.37974 12.0002C3.37974 7.16916 7.29607 3.25284 12.1271 3.25284C12.1283 3.25284 12.1295 3.25284 12.1306 3.25284V0.86719Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12.1306 0.86719H12.4306V0.567386L12.1308 0.56719L12.1306 0.86719ZM23.0001 14.3856L23.2932 14.4496L23.3726 14.0856H23.0001V14.3856ZM20.5453 14.3856V14.0856H20.3183L20.2566 14.3039L20.5453 14.3856ZM12.1306 3.25284L12.1305 3.55284L12.4306 3.55296V3.25284H12.1306ZM12.1308 0.56719C12.1283 0.567188 12.1258 0.567187 12.1232 0.567187V1.16719C12.1256 1.16719 12.128 1.16719 12.1304 1.16719L12.1308 0.56719ZM12.1232 0.567187C5.80895 0.567187 0.690219 5.68591 0.690219 12.0002H1.29022C1.29022 6.01729 6.14032 1.16719 12.1232 1.16719V0.567187ZM0.690219 12.0002C0.690219 18.3145 5.80895 23.4332 12.1232 23.4332V22.8332C6.14032 22.8332 1.29022 17.9831 1.29022 12.0002H0.690219ZM12.1232 23.4332C17.597 23.4332 22.1717 19.5867 23.2932 14.4496L22.707 14.3216C21.6444 19.189 17.309 22.8332 12.1232 22.8332V23.4332ZM23.0001 14.0856H20.5453V14.6856H23.0001V14.0856ZM12.1271 21.0475C16.2689 21.0475 19.76 18.2646 20.8339 14.4672L20.2566 14.3039C19.2538 17.8498 15.9934 20.4475 12.1271 20.4475V21.0475ZM3.07974 12.0002C3.07974 16.9969 7.13038 21.0475 12.1271 21.0475V20.4475C7.46175 20.4475 3.67974 16.6655 3.67974 12.0002H3.07974ZM12.1271 2.95284C7.13038 2.95284 3.07974 7.00348 3.07974 12.0002H3.67974C3.67974 7.33485 7.46175 3.55284 12.1271 3.55284V2.95284ZM12.1308 2.95284C12.1295 2.95284 12.1283 2.95284 12.1271 2.95284V3.55284C12.1282 3.55284 12.1294 3.55284 12.1305 3.55284L12.1308 2.95284ZM12.4306 3.25284V0.86719H11.8306V3.25284H12.4306Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </svg>
            </div>
          )}
        </>
      ) : (
        children
      )}
    </button>
  );
}
