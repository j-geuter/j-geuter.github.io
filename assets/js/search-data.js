// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order. For a complete list, see Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A PDF version of the CV can be downloaded by clicking the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-three-papers-accepted-to-icml-2025-universal-neural-optimal-transport-main-conference-entropy-driven-pre-tokenization-for-byte-pair-encoding-tokenization-workshop-and-guided-speculative-inference-for-efficient-test-time-alignment-of-llms-spotlight-at-es-fomo-workshop",
          title: 'Three papers accepted to ICML 2025! Universal Neural Optimal Transport (main conference), Entropy-Driven...',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-receive-a-kempner-institute-graduate-fellowship",
          title: 'I was selected to receive a Kempner Institute Graduate Fellowship!',
          description: "",
          section: "News",},{id: "news-new-preprint-out-boomerang-distillation-enables-zero-shot-model-size-interpolation-we-show-that-given-a-teacher-and-a-single-distilled-student-model-you-can-create-models-of-intermediate-sizes-without-any-additional-training",
          title: 'New preprint out: Boomerang Distillation Enables Zero-Shot Model Size Interpolation. We show that...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-iclr-2026-guided-speculative-inference-for-efficient-test-time-alignment-of-llms-and-boomerang-distillation-enables-zero-shot-model-size-interpolation",
          title: 'Two papers accepted to ICLR 2026! Guided Speculative Inference for Efficient Test-Time Alignment...',
          description: "",
          section: "News",},{id: "news-new-preprint-out-stop-training-for-the-worst-progressive-unmasking-accelerates-masked-diffusion-training-we-propose-a-simple-modification-to-the-forward-masking-process-of-masked-diffusion-models-that-speeds-up-training-by-up-to-2-5x",
          title: 'New preprint out: Stop Training for the Worst: Progressive Unmasking Accelerates Masked Diffusion...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/j-geuter", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jonathan-geuter", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5CTwTC0AAAAJ", "_blank");
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
