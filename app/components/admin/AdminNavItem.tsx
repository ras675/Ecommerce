import { IconType } from "react-icons";

interface AdminNavItemProps {
    selected?: boolean;
    icon: IconType;
    label: string;
}

const AdminNavItem: React.FC<AdminNavItemProps> = ({
    selected,
    icon: Icon,
    label,
}) => {
    return (
        <div className={`flex items-center justify-center text-center gap-1 p-2 cursor-pointer ${selected ? 'border-b-2 border-slate-800 text-slate-800' : 'border-transparent text-slate-500'} hover:text-slate-800 transition`}>
            <Icon size="w-5 h-5" />
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
};

export default AdminNavItem;
