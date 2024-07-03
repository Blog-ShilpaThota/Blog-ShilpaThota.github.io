import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usePathname from "../../hooks/usePathname";
import Link from "../../components/Link";

function getRandomIcon() {
  const icons = [
    <PresentationChartBarIcon className="h-5 w-5" />,
    <ShoppingBagIcon className="h-5 w-5" />,
    <UserCircleIcon className="h-5 w-5" />,
    <Cog6ToothIcon className="h-5 w-5" />,
    <InboxIcon className="h-5 w-5" />,
    <PowerIcon className="h-5 w-5" />,

  ];
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
}
function SideBar({category,subcategories}) {
  const [show,setShow]=useState(false);
  const [dynamicMenu, setDynamicMenu] = useState([]);
  const history = useNavigate();
  const pathname = usePathname();


  useEffect(()=>{
    if(subcategories && subcategories.length>0){
      setDynamicMenu(
        subcategories.map((subcategory) => ({
          icon: getRandomIcon(), // Get a random icon
          name: subcategory.subname,
          href: `/subcategory/${category.id}/${subcategory.subid}`,
          id:subcategory.subid
        }))
      );
            setShow(true);
    }
  },[]);
  const handleItemClick = (href) => {
    if(href.startsWith("/category")){
      href=`../../${href}`;
    }
    console.log(href);
    history(href,{replace:true});
  };
  return (
    <>
    {!show ?<></> :
     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
     <div className="mb-2 p-4">
       <Typography variant="h5" color="blue-gray">
         Topics
       </Typography>
     </div>
     <List>
       {dynamicMenu.map((item, index) => (
                 <ListItem key={item.id}>

         <Link
         className={`px-6 py-3 font-medium rounded-full flex items-center ${
           pathname === item.href
             ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
             : "hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
         }`}
         href={item.href}
       >
           
           <ListItemPrefix>{item.icon}</ListItemPrefix>
           {item.name}
         </Link>
         </ListItem>

       ))}
     </List>
   </Card>}
    </>
  );
}

export default SideBar;