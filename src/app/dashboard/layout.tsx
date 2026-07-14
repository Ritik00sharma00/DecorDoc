import type { Metadata } from "next";
import type { ReactNode } from "react";
import DashboardShellWrapper from "@/components/DashboardShellWrapper";

export const metadata: Metadata = {
	title: "Docco Dashboard",
	description: "Dashboard layout for the Docco app.",
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
	// Server component: render client shell wrapper
	return (
		<DashboardShellWrapper>{children}</DashboardShellWrapper>
	);
}

