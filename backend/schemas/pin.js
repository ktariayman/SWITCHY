export default {

    name : 'pin',
    title : 'Pin',
    type : 'document',
    fields : [ 
        {
        name : 'title',
        title : 'Title',
        type : 'string',
        },
        {
        name : 'about',
        title : 'About',
        type : 'string',
        },
        {
            name : 'phoneNumber',
            title : 'PhoneNumber',
            type : 'number',
        },
        {
            name : 'category',
            title : 'Category',
            type : 'string',
        },
        {
            name: 'livrision',
            title : 'Livrision',
            type : 'string',
        }, 
        {
            name: 'quantity',
            title : 'Quantity',
            type : 'number',
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options :[{
                hotspot : true
                
            }]
        },
        {
            name : 'userId',
            title : 'UserID',
            type : 'string',
        },
        {
            name : 'postedBy',
            title : 'PostedBy',
            type : 'postedBy',
        },
        {
            name : 'save',
            title : 'Save',
            type : 'array',
            of :[{type:'save'}]
        },
        {
            name : 'comments',
            title : 'Comments',
            type : 'array',
            of :[{type:'comment',}]
            
        },
        

    

    ]
    
}