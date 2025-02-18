"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { /* Check, */ ChevronDown } from "lucide-react";

import { cn } from "@formbricks/lib/cn";

const Select: React.ComponentType<SelectPrimitive.SelectProps> = SelectPrimitive.Root;

const SelectGroup: React.ComponentType<SelectPrimitive.SelectGroupProps> = SelectPrimitive.Group;

const SelectValue: React.ComponentType<SelectPrimitive.SelectValueProps> = SelectPrimitive.Value;

const SelectTrigger: React.ComponentType<SelectPrimitive.SelectTriggerProps> = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ",
      className
    )}
    {...props}>
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent: React.ComponentType<SelectPrimitive.SelectContentProps> = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "animate-in fade-in-80 relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-slate-50 dark:bg-slate-700 text-slate-700 shadow-md dark:text-slate-300",
        className
      )}
      {...props}>
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel: React.ComponentType<SelectPrimitive.SelectLabelProps> = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-200 ", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem: React.ComponentType<SelectPrimitive.SelectItemProps> = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm font-medium outline-none hover:text-slate-500 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
      className
    )}
    {...props}>
    {/*     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span> */}

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator: React.ComponentType<SelectPrimitive.SelectSeparatorProps> = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 ", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
