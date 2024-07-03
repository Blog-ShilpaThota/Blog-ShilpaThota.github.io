import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import ButtonPrimary from "../../../components/Button/ButtonPrimary";
import Select from "../../../components/Select/Select";
import Label from "../../../components/Label/Label";
import Layout from "../dashboardLayout";
import LayoutDashboard from "../layout";
import { useItems } from "../../../contains/ItemContext";
import { postDataToDBCategory, updateItemCategory, deleteItemCategory } from "../../../contains/fetchCategory";

const DashboardEditCategory = () => {
  // State variables to track form field values
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isNewCategory, setIsNewCategory] = useState(true); // Flag to determine if the selected category is new or existing
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [taxonomy, setTaxonomy] = useState("");
  const { categories } = useItems();
  const [subcategory,setSubcategory] = useState([]);
    // Function to generate a unique ID
    const generateUniqueID = () => {
      return '_' + Math.random().toString(36).substr(2, 9);
    };
  const newID = generateUniqueID(); // Generating a unique ID for the new category
  const newSubID=generateUniqueID();

  const editSubcategory = (subcategoryIndex, newSubcategoryData) => {
    const updatedSubcategories = [...subcategory];
    updatedSubcategories[subcategoryIndex] = newSubcategoryData;
    setSubcategory(updatedSubcategories);
  };

  const addSubcategory = (e) => {
    e.preventDefault();
    setSubcategory([...subcategory, { subid:newSubID, subname: "",href:`/category/${newID}/${newSubID}`,  thumbnail: "" }]);

  };
  
  // Define function to remove subcategory
  const removeSubcategory = (index) => {
    const updatedSubcategories = [...subcategory];
    updatedSubcategories.splice(index, 1);
    setSubcategory(updatedSubcategories);
  };
  
  // Define function to handle subcategory field changes
  const handleSubcategoryChange = (index, key, value) => {
    const updatedSubcategories = [...subcategory];
    updatedSubcategories[index][key] = value;
    setSubcategory(updatedSubcategories);
    console.log(subcategory);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation checks
    if (!name || !color || !thumbnail || !taxonomy) {
      // If any of the required fields are empty, display an error message or handle it as needed
      alert("Please fill in all required fields.");
      return;
    }

    const newCategory = {
      id: newID, // Generating a unique ID for the new category
      idsort: newID, // Generating a unique ID for sorting
      name: name,
      color: color,
      href: `/category/${newID}`,
      thumbnail: thumbnail,
      taxonomy: taxonomy,
      subcategory:subcategory
    };
    console.log(subcategory);
    setSelectedCategory({...selectedCategory,subcategory:subcategory});

    const updateCategory={
      id:selectedCategory.id,
      idsort:selectedCategory.id,
      href:selectedCategory.href,
      name:name,
      color:color,
      thumbnail:thumbnail,
      taxonomy:taxonomy,
      subcategory:subcategory
    }
    console.log(updateCategory);
    if (isNewCategory) {
      // Call the postData function to submit new category
      postDataToDBCategory(newCategory).then(() => {
        alert("Category Submitted Successfully");
        // Reset form fields after submission
        resetFormFields();
      }).catch((err) => {
        alert(err);
        alert("Category submission was unsuccessful. Try Again.");
      });
    } else {
      // Update existing category
      console.log(updateCategory);
      // Call the putData function to update the category
      updateItemCategory(updateCategory).then(() => {
        alert("Category Updated Successfully");
        // Reset form fields after submission
        resetFormFields();
        setIsNewCategory(true); // Reset to allow adding new categories
        // window.location.reload();
      }).catch((err) => {
        alert(err);
        alert("Category update was unsuccessful. Try Again.");
      });
    }
  };

  // Function to reset form fields
  const resetFormFields = () => {
    setName("");
    setColor("");
    setThumbnail("");
    setTaxonomy("");
    setSubcategory([]);
    window.location.reload();
  };



  // Function to handle category selection
  const handleCategorySelect = (e) => {
    const categoryId = e.target.value;
    if (categoryId === "new") {
      setIsNewCategory(true);
      setSelectedCategory({});
      resetFormFields();
    } else {
      setIsNewCategory(false);
      // Find the selected category from the categories list
      const selectedCat = categories.find((cat) => cat.id === categoryId);
      setSelectedCategory(selectedCat);
      // Populate form fields with category data
      setName(selectedCat.name);
      setColor(selectedCat.color);
      setThumbnail(selectedCat.thumbnail);
      setTaxonomy(selectedCat.taxonomy);
      setSubcategory(selectedCat.subcategory);
    }
  };

  // Function to handle category deletion
  const handleCategoryDelete = () => {
    if (!isNewCategory && selectedCategory.id) {
      // Call the deleteData function to delete the category
      deleteItemCategory(selectedCategory.id).then(() => {
        alert("Category Deleted Successfully");
        // Reset form fields after deletion
        resetFormFields();
        
        setIsNewCategory(true); // Reset to allow adding new categories
      }).catch((err) => {
        alert(err);
        alert("Category deletion was unsuccessful. Try Again.");
      });
    }
  };

  return (
    <Layout>
      <LayoutDashboard>
        <div className="rounded-xl md:border md:border-neutral-100 dark:border-neutral-800 md:p-6">
          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <label className="block">
              <Label>Categories</Label>
              <Select className="mt-1" value={isNewCategory ? "new" : selectedCategory.id} onChange={handleCategorySelect}>
                <option value="new">New Category</option>
                {categories.map((categ) => (
                  <option key={categ.id} value={categ.id}>
                    {categ.name}
                  </option>
                ))}
              </Select>
            </label>
            <label className="block">
              <Label>Name *</Label>
              <Input type="text" className="mt-1" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="block">
              <Label>Color *</Label>
              <Input type="text" className="mt-1" value={color} onChange={(e) => setColor(e.target.value)} />
            </label>
            <label className="block">
              <Label>Thumbnail *</Label>
              <Input type="text" className="mt-1" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </label>
            <label className="block">
              <Label>Taxonomy *</Label>
              <Input type="text" className="mt-1" value={taxonomy} onChange={(e) => setTaxonomy(e.target.value)} />
            </label>
            <label className="block">
{subcategory && subcategory.length>0 && subcategory.map((subcat, index) => (
  <div key={index} className="flex items-center space-x-4">
    <Input
      type="text"
      value={subcat.subname}
      onChange={(e) => handleSubcategoryChange(index, "subname", e.target.value)}
      placeholder="Name"
    />
    <Input
      type="text"
      value={subcat.thumbnail}
      onChange={(e) => handleSubcategoryChange(index, "thumbnail", e.target.value)}
      placeholder="Thumbnail"
    />
    <ButtonPrimary style={{outerHeight:'10px'}} onClick={(e) => {e.preventDefault(); removeSubcategory(index);}}>Remove</ButtonPrimary>
  </div>
))}
</label>
<ButtonPrimary onClick={addSubcategory}>Add Subcategory</ButtonPrimary>
            <ButtonPrimary className="md:col-span-2" type="submit">
              {isNewCategory ? "Submit category" : "Update category"}
            </ButtonPrimary>
            {!isNewCategory && (
              <ButtonPrimary className="md:col-span-2" onClick={handleCategoryDelete}>
                Delete category
              </ButtonPrimary>
            )}
          </form>
        </div>
      </LayoutDashboard>
    </Layout>
  );
};

export default DashboardEditCategory;
