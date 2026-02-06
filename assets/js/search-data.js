// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bio",
          title: "bio",
          description: "In learning you will teach, and in teaching you will learn.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-posts",
          title: "posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "A collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-neural-style-transfer-deep-learning-notes-c4w4",
        
          title: "Neural Style Transfer (Deep Learning Notes C4W4)",
        
        description: "generation of an image that blends the content from one image and the style of the other",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deep-C4W4-NST/";
          
        },
      },{id: "post-face-recognition-deep-learning-notes-c4w4",
        
          title: "Face Recognition (Deep Learning Notes C4W4)",
        
        description: "training a Siamese network for face recognition tasks with a triplet loss function",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deep-C4W4-face-recognition/";
          
        },
      },{id: "post-image-semantic-segmentation-deep-learning-notes-c4w4",
        
          title: "Image Semantic Segmentation (Deep Learning Notes C4W4)",
        
        description: "labelling and colouring the pixels of an image into a set of predefined classes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/deep-C4W3-segmentation/";
          
        },
      },{id: "books-mathematics-a-very-short-introduction",
          title: 'Mathematics: A Very Short Introduction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_vsi_mathematics/";
            },},{id: "books-上帝粒子-the-god-particle",
          title: '上帝粒子（The God Particle）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_god_particle/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-a2-physics-notes",
          title: 'A2 Physics Notes',
          description: "lecture notes on A-Level physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/a2physics_notes/";
            },},{id: "projects-as-physics-notes",
          title: 'AS Physics Notes',
          description: "lecture notes on AS-Level physics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asphysics_notes/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yuhao-yang-cy", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuhao-yang-cy", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.zhihu.com/people/phycolin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
