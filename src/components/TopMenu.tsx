import styles from "./topmenu.module.css";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {

	const session = await getServerSession(authOptions);


	return (

		<div className="fixed top-0 left-0 right-0 z-50 flex h-[50px] flex-row items-center justify-between border-y border-gray-200 bg-white">
			<div className="flex items-center">
				{session ? (
					<Link href="/api/auth/signout">
						<div className="px-2 text-cyan-600 text-sm">
							Sign-Out of {session.user?.name}
						</div>
					</Link>
				) : (
					<Link href="/api/auth/signin">
						<div className="px-2">Sign in</div>
					</Link>
				)}

				<TopMenuItem title="My Bookings" pageRef="/mybookings" />
			</div>

			<div className="flex items-center h-full">
                <TopMenuItem title="Booking" pageRef="/booking" />

                <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="h-full w-auto object-contain"
                />
            </div>
		</div>
	);
};
