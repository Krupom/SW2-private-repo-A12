import styles from "./topmenu.module.css";
import Link from "next/link";
export default function TopMenuItem(itemInfo: { title: string, pageRef: string }) {
	return (
		<Link href={itemInfo.pageRef}>
			 <div className="w-[120px] text-center mb-auto font-[Verdana,Geneva,Tahoma,sans-serif] text-[10pt] text-gray-500">
				{itemInfo.title}
			</div>
		</Link>
	);
};
