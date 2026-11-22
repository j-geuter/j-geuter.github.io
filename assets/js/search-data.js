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
          description: "Publications in reversed chronological order. * denotes equal contribution. For a complete list, see Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "Longer write-ups of my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A PDF version of the CV can be downloaded by clicking the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-unlocking-lossless-speedups-in-llms-via-discrete-diffusion",
        
          title: "Unlocking Lossless Speedups in LLMs via Discrete Diffusion",
        
        description: "We introduce Uno, a standard autoregressive model plus small diffusion weights that draft a block of tokens in one forward pass, while the unchanged AR weights check the draft. The output follows exactly the AR model&#39;s distribution.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/uno/";
          
        },
      },{id: "post-boomerang-distillation-enables-zero-shot-model-size-interpolation",
        
          title: "Boomerang Distillation Enables Zero-Shot Model Size Interpolation",
        
        description: "We identify a novel phenomenon, Boomerang Distillation, and describe how it can be used to create entire families of LLMs of fine-grained sizes without any training from a single student-teacher pair.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/boomerang-distillation/";
          
        },
      },{id: "news-three-papers-accepted-to-icml-2025-universal-neural-optimal-transport-main-conference-entropy-driven-pre-tokenization-for-byte-pair-encoding-tokenization-workshop-and-guided-speculative-inference-for-efficient-test-time-alignment-of-llms-spotlight-at-es-fomo-workshop",
          title: 'Three papers accepted to ICML 2025! Universal Neural Optimal Transport (main conference), Entropy-Driven...',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-receive-a-kempner-institute-graduate-fellowship",
          title: 'I was selected to receive a Kempner Institute Graduate Fellowship!',
          description: "",
          section: "News",},{id: "news-new-preprint-out-boomerang-distillation-enables-zero-shot-model-size-interpolation-we-show-that-given-a-teacher-and-a-single-distilled-student-model-you-can-create-models-of-intermediate-sizes-without-any-additional-training-check-out-the-blog-post",
          title: 'New preprint out: Boomerang Distillation Enables Zero-Shot Model Size Interpolation. We show that...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-iclr-2026-guided-speculative-inference-for-efficient-test-time-alignment-of-llms-and-boomerang-distillation-enables-zero-shot-model-size-interpolation",
          title: 'Two papers accepted to ICLR 2026! Guided Speculative Inference for Efficient Test-Time Alignment...',
          description: "",
          section: "News",},{id: "news-new-preprint-out-stop-training-for-the-worst-progressive-unmasking-accelerates-masked-diffusion-training-we-propose-a-simple-modification-to-the-forward-masking-process-of-masked-diffusion-models-that-speeds-up-training-by-up-to-2-5x",
          title: 'New preprint out: Stop Training for the Worst: Progressive Unmasking Accelerates Masked Diffusion...',
          description: "",
          section: "News",},{id: "news-our-paper-stop-training-for-the-worst-progressive-unmasking-accelerates-masked-diffusion-training-was-accepted-to-icml-2026",
          title: 'Our paper Stop Training for the Worst: Progressive Unmasking Accelerates Masked Diffusion Training...',
          description: "",
          section: "News",},{id: "news-i-ll-work-as-an-ai-research-intern-at-the-institute-of-foundation-models-in-sunnyvale-ca-for-the-summer-i-ll-be-advised-by-subham-sahoo",
          title: 'I’ll work as an AI Research Intern at the Institute of Foundation Models...',
          description: "",
          section: "News",},{id: "news-two-new-follow-up-works-to-boomerang-distillation-out-understanding-layer-patching-in-model-size-interpolation-accepted-to-the-adaptfm-workshop-at-icml-2026-and-thinking-at-the-right-size-amortized-distillation-across-post-trained-llms-accepted-to-emnlp-2026-these-papers-explore-extending-boomerang-distillation-to-post-trained-models-and-better-understanding-its-layer-patching-mechanism",
          title: 'Two new follow-up works to boomerang distillation out: Understanding Layer Patching in Model...',
          description: "",
          section: "News",},{id: "news-i-helped-train-ifm-s-suite-of-fully-open-source-language-models-coming-in-sizes-from-0-9b-to-375b-we-also-developed-uno-a-lossless-discrete-diffusion-framework-which-accelerates-decoding-by-up-to-2-5x-compared-to-autoregressive-sampling-we-provide-uno-adapters-for-qwen3-8b-and-our-own-0-9b-and-7b-models-check-out-the-paper-unlocking-lossless-speedups-in-llms-via-discrete-diffusion-1-trending-paper-on-hugging-face-upon-release-technical-report-and-the-blog-post",
          title: 'I helped train IFM’s suite of fully open-source language models, coming in sizes...',
          description: "",
          section: "News",},{id: "news-our-paper-understanding-layer-patching-in-model-size-interpolation-was-accepted-to-neurips-2026",
          title: 'Our paper Understanding Layer Patching in Model Size Interpolation was accepted to NeurIPS...',
          description: "",
          section: "News",},{id: "news-we-release-jeff-a-suite-of-state-of-the-art-decision-models-that-outperform-typesafe-s-jev-model-across-a-wide-range-of-tasks-we-open-source-our-models-serving-code-and-opendecisions-a-novel-decision-model-validation-dataset-check-out-the-tech-report-releasing-the-inner-jev-a-simple-recipe-for-open-decision-models",
          title: 'We release Jeff, a suite of state-of-the-art decision models that outperform TypeSafe’s Jev...',
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
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JonathanGeuter", "_blank");
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
