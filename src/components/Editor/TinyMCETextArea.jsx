import React, { useEffect, useRef,useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCETextarea = ({ initialValue, onChange }) => {
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;
  const [selectedContent, setSelectedContent] = useState("");
  useEffect(() => {
    console.log(initialValue);
    if (initialValue !== undefined) {
      setSelectedContent(initialValue);
    }
  }, [ initialValue]);
return (
  <>
    <Editor
      apiKey='6y5ufnnbqwwnf3ctwvr61cn58wdvga0q6s1jk7kyve9rapw2'
      value={selectedContent}
      init={{
        height: 500,
        menubar: 'file edit insert view format table tools help',
        plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
        toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        details_initial_state: 'collapsed',
        image_caption: true,
        paste_data_images: true,
        formats: {
            // Changes the alignment buttons to add a class to each of the matching selector elements
            alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'left' },
            aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'center' },
            alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'right' },
            alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img,audio,video', classes: 'full' }
          },
          importcss_append: true,
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          contextmenu: 'link image table',
          toolbar_mode: 'sliding',
          quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          skin: useDarkMode ? 'oxide-dark' : 'oxide',
          content_css: useDarkMode ? 'dark' : 'default',
          content_style: "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); body {font-family: Poppins;}",
        selector:'textarea#editor-text-area',
              }}
        onEditorChange={text => {          
          setSelectedContent(text);
          onChange(text);}}
        onInit={(evt, editor) => {
          editor.setContent(initialValue&&initialValue!==""?initialValue:"")
        }}
    />
    {/* <button onClick={log}>Log editor content</button> */}
  </>
);
    };
export default TinyMCETextarea;
