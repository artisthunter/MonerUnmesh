import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lightbulb,
  Brain,
  ArrowRight,
  ArrowUp,
  Goal,
  Cpu,
  Eye,
  PersonStanding,
  Atom,
  MessageCircleQuestionMark,
  Boxes,
  Heart,
  BookOpen,
  FingerprintPattern,
  ScanEye,
  CircleQuestionMark,
} from "lucide-react";
import "./Home.css";
import Visitor from "../../Components/Visitor/Visitor";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo3.png";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import last from "../../assets/last.png";
import video1 from "../../assets/glimpse.mp4";
import pic1 from "../../assets/school2.jpeg";
import pic2 from "../../assets/classroom3.jpeg";
import pic3 from "../../assets/classroom2.jpeg";
import pic4 from "../../assets/classroom1.jpeg";
import pic5 from "../../assets/school13.jpeg";
import pic12 from "../../assets/award1.jpeg";
import pic13 from "../../assets/award2.jpeg";
import pic6 from "../../assets/school15.jpeg";
import video2 from "../../assets/study.mp4";
import pic18 from "../../assets/write10.jpeg";
import pic19 from "../../assets/write11.jpeg";
import pic15 from "../../assets/meal1.jpeg";
import pic16 from "../../assets/meal2.jpeg";
import pic17 from "../../assets/meal3.jpeg";
import pic7 from "../../assets/write7.jpeg";
import pic8 from "../../assets/write8.jpeg";
import pic9 from "../../assets/write9.jpeg";
import pic10 from "../../assets/write1.jpeg";
import pic11 from "../../assets/write6.jpeg";
import pic14 from "../../assets/write5.jpeg";
import pic20 from "../../assets/family1.jpeg";
import video3 from "../../assets/family2.mp4";
import video4 from "../../assets/family3.mp4";

const HomeBengali = () => {
  const interval = 3000;
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);
  const scrollContainer3Ref = useRef(null);
  const scrollContainer4Ref = useRef(null);
  const scrollContainer5Ref = useRef(null);
  const scrollContainer6Ref = useRef(null);
  const scrollContainer7Ref = useRef(null);
  const scrollContainer8Ref = useRef(null);

  const scrollInterval3Ref = useRef(null);
  const scrollInterval8Ref = useRef(null);

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);
  const [currentIndex8, setCurrentIndex8] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = scrollContainer1Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex1 + 1) % totalImages;

      setCurrentIndex1(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex1]);

  useEffect(() => {
    const container = scrollContainer2Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex2 + 1) % totalImages;

      setCurrentIndex2(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex2]);

  useEffect(() => {
    const container = scrollContainer3Ref.current;
    if (!container) return;

    scrollInterval3Ref.current = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex3 + 1) % totalImages;

      setCurrentIndex3(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => {
      if (scrollInterval3Ref.current) {
        clearInterval(scrollInterval3Ref.current);
      }
    };
  }, [currentIndex3]);

  useEffect(() => {
    const container = scrollContainer4Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex4 + 1) % totalImages;

      setCurrentIndex4(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex4]);

  useEffect(() => {
    const container = scrollContainer5Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex5 + 1) % totalImages;

      setCurrentIndex5(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex5]);

  useEffect(() => {
    const container = scrollContainer6Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex6 + 1) % totalImages;

      setCurrentIndex6(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex6]);

  useEffect(() => {
    const container = scrollContainer7Ref.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex7 + 1) % totalImages;

      setCurrentIndex7(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [currentIndex7]);

  useEffect(() => {
    const container = scrollContainer8Ref.current;
    if (!container) return;

    scrollInterval8Ref.current = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex8 + 1) % totalImages;

      setCurrentIndex8(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    return () => {
      if (scrollInterval8Ref.current) {
        clearInterval(scrollInterval8Ref.current);
      }
    };
  }, [currentIndex8]);

  useEffect(() => {
    const videos = document.querySelectorAll(
      ".video1 video, .video2 video, .video3 video, .video4 video",
    );

    videos.forEach((video) => {
      const playButton = video.nextElementSibling;

      video.addEventListener("play", () => {
        if (playButton) playButton.style.display = "none";
      });

      video.addEventListener("pause", () => {
        if (playButton) playButton.style.display = "block";
      });

      video.addEventListener("ended", () => {
        if (playButton) playButton.style.display = "block";
      });
    });

    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    videos.forEach((video) => {
      observer.observe(video);
    });

    // Cleanup
    return () => {
      videos.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, []);

  const handlePrevious1 = () => {
    const container = scrollContainer1Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex1 === 0 ? totalImages - 1 : currentIndex1 - 1;

    setCurrentIndex1(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext1 = () => {
    const container = scrollContainer1Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex1 + 1) % totalImages;

    setCurrentIndex1(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious2 = () => {
    const container = scrollContainer2Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex2 === 0 ? totalImages - 1 : currentIndex2 - 1;

    setCurrentIndex2(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext2 = () => {
    const container = scrollContainer2Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex2 + 1) % totalImages;

    setCurrentIndex2(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious3 = () => {
    const container = scrollContainer3Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex3 === 0 ? totalImages - 1 : currentIndex3 - 1;

    setCurrentIndex3(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext3 = () => {
    const container = scrollContainer3Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex3 + 1) % totalImages;

    setCurrentIndex3(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious4 = () => {
    const container = scrollContainer4Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex4 === 0 ? totalImages - 1 : currentIndex4 - 1;

    setCurrentIndex4(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext4 = () => {
    const container = scrollContainer4Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex4 + 1) % totalImages;

    setCurrentIndex4(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious5 = () => {
    const container = scrollContainer5Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex5 === 0 ? totalImages - 1 : currentIndex5 - 1;

    setCurrentIndex5(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext5 = () => {
    const container = scrollContainer5Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex5 + 1) % totalImages;

    setCurrentIndex5(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious6 = () => {
    const container = scrollContainer6Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex6 === 0 ? totalImages - 1 : currentIndex6 - 1;

    setCurrentIndex6(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext6 = () => {
    const container = scrollContainer6Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex6 + 1) % totalImages;

    setCurrentIndex6(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious7 = () => {
    const container = scrollContainer7Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex7 === 0 ? totalImages - 1 : currentIndex7 - 1;

    setCurrentIndex7(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext7 = () => {
    const container = scrollContainer7Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex7 + 1) % totalImages;

    setCurrentIndex7(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrevious8 = () => {
    const container = scrollContainer8Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const prevIndex = currentIndex8 === 0 ? totalImages - 1 : currentIndex8 - 1;

    setCurrentIndex8(prevIndex);
    const targetImage = images[prevIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleNext8 = () => {
    const container = scrollContainer8Ref.current;
    if (!container) return;

    const images = container.children;
    const totalImages = images.length;
    const nextIndex = (currentIndex8 + 1) % totalImages;

    setCurrentIndex8(nextIndex);
    const targetImage = images[nextIndex];
    container.scrollTo({
      left: targetImage.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleVideoPlay1 = () => {
    if (scrollInterval3Ref.current) {
      clearInterval(scrollInterval3Ref.current);
      scrollInterval3Ref.current = null;
    }

    if (scrollInterval8Ref.current) {
      clearInterval(scrollInterval8Ref.current);
      scrollInterval8Ref.current = null;
    }
  };

  const handleVideoPause1 = () => {
    if (scrollInterval3Ref.current) {
      clearInterval(scrollInterval3Ref.current);
    }

    const container1 = scrollContainer3Ref.current;
    if (!container1) return;

    scrollInterval3Ref.current = setInterval(() => {
      const images = container1.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex3 + 1) % totalImages;

      setCurrentIndex3(nextIndex);
      const targetImage = images[nextIndex];
      container1.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);

    const container2 = scrollContainer8Ref.current;
    if (!container2) return;

    scrollInterval8Ref.current = setInterval(() => {
      const images = container2.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex8 + 1) % totalImages;

      setCurrentIndex8(nextIndex);
      const targetImage = images[nextIndex];
      container2.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);
  };

  const handleVideoPlay2 = () => {
    if (scrollInterval8Ref.current) {
      clearInterval(scrollInterval8Ref.current);
      scrollInterval8Ref.current = null;
    }
  };

  const handleVideoPause2 = () => {
    if (scrollInterval8Ref.current) {
      clearInterval(scrollInterval8Ref.current);
    }

    const container = scrollContainer8Ref.current;
    if (!container) return;

    scrollInterval8Ref.current = setInterval(() => {
      const images = container.children;
      const totalImages = images.length;
      const nextIndex = (currentIndex8 + 1) % totalImages;

      setCurrentIndex8(nextIndex);
      const targetImage = images[nextIndex];
      container.scrollTo({
        left: targetImage.offsetLeft,
        behavior: "smooth",
      });
    }, interval);
  };

  return (
    <div className="home">
      <Visitor />
      <div className="header">
        <div className="dialogue">
          <div className="dialogue3">
            <p>মনের</p>
          </div>
          <div className="dialogue4">
            <p>উন্মেষ</p>
          </div>
        </div>
        <div className="logo">
          <div className="logo2">
            <div className="first">
              <p className="firstone">Moner</p>
              <p className="firsttwo">Unmesh</p>
            </div>
            <div className="left-img">
              <img src={logo2} alt="Logo" />
            </div>
            <div className="last">
              <p className="lastone">Alternative</p>
              <p className="lasttwo">Education</p>
              <p className="lastthree">System</p>
            </div>
          </div>
          <div className="logo1">
            <img className="logo1-img" src={logo1} alt="Logo" />
            <p className="dialogue3one">সারল্য পূর্ণ নন্দন তত্ত্ব</p>
            <p className="dialogue3two">পরিপাটি যুক্ত নন্দন তত্ত্বের নিকট</p>
            <p className="dialogue3three">ময়লা তত্ত্ব হিসেবে পরিচিত।</p>
          </div>
          <div className="logo3">
            <div className="firsts">
              <img className="firstsone" src={first} />
              <img className="firststwo" src={second} />
            </div>
            <div className="right-img">
              <img src={logo2} alt="Logo" />
            </div>
            <div className="lasts">
              <img className="lasts-img" src={last} alt="Last Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="main-card">
          <div className="hero-section">
            <h1 className="hero-title">মনের উন্মেষ</h1>
            <p className="hero-subtitle">মনের বিকাশ</p>
            <button
              className="discover-more-btn"
              onClick={() => navigate("/link")}
            >
              আরও জানুন
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="slogans">
            মনের উন্মেষ হল
            <br />
            উপনিষদের শিক্ষা এবং Cognitive Science এর জ্ঞানের মিথষ্ক্রিয়ায়
            সংযোগমূলক চেতনাভিত্তিক একটি বিকল্প শিক্ষা প্রতিষ্ঠান।
          </div>

          <div className="slogans">
            বিকল্প শিক্ষা,
            <br />
            বিষয়বস্তুতে নজর দেওয়া শেখায় না
            <br />
            নজরের ভিতরে বোধ জাগিয়ে তোলে।
            <span>।। যোগীরাজ শ্রী অলোক কুমার দাস ।।</span>
          </div>

          <div className="slogans">
            মনের উন্মেষ ডট কম একটি শিক্ষামূলক ওয়েবসাইট। এই ওয়েবসাইটের উদ্দেশ্য
            আমরা কি শেখাই তা বিজ্ঞাপন দিয়ে জানানো নয় বরঞ্চ আমরা যেভাবে শিশুদের
            শিখাই তার মুল তত্ত্ব কিসের উপর প্রতিষ্ঠিত এবং কেন তা উৎকৃষ্ট তা এই
            বিকল্প শিক্ষা ব্যবস্থার মাধ্যমে জানানো যাতে সমস্ত শিক্ষার্থীরাই এর
            উপকার উপভোগ করতে পারে।
            <br />
            <br />
            উপনিষদীয় আত্মবিদ্যা এবং আধুনিক Cognitive science এর মিথস্ক্রিয়া =
            বিকল্প শিক্ষা দর্শন।
          </div>

          <div className="video1">
            <video src={video1} playsInline controls />
            <div className="play-button"></div>
          </div>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Brain size={32} color="white" />
            </div>
            মনের উন্মেষ উদ্ভাবনের প্রেক্ষাপট
          </h2>
          <h3 className="text-content">
            যোগীরাজ অলোক কুমার দাস দীর্ঘদিন হিমালয়ে গুহাবাসী হয়ে যোগসাধনা করে
            উপনিষদীয় আত্মবিদ্যা সম্বন্ধে যা কিছু উপলব্ধি করেছেন সেই বিদ্যা এবং
            আধুনিক যুগের Cognitive science এর মিথস্ক্রিয়ায় এক নতুন শিক্ষা পদ্ধতি
            উদ্ভাবন করেছেন। এই নতুন বিদ্যাকে পরবর্তিকালে আবার কিছু সংস্কার করে
            প্রচলিত প্রাতিষ্ঠানিক শিক্ষার বিকল্প শিক্ষা হিসেবে উপযোগী করে
            তুলেছেন। তিনি এই বিকল্প শিক্ষা পদ্ধতির প্রয়োগের জন্য ঝাড়্গ্রাম,
            পশ্চিম মেদিনীপুর, জঙ্গল মহল এলাকার আদিবাসী সমাজের First generation
            learner শিশুদের বেছে নিয়েছেন। এই উদ্দেশ্যে মনের উন্মেষ নামে এক non
            formal স্কুল শুরু করে ওই আদিবাসী শিশুদের যাতে শিক্ষিত করে তোলা যায়
            তা নিয়ে এখনো গবেষণা করে যাচ্ছেন।
          </h3>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Atom size={32} color="white" />
            </div>
            সংক্ষেপে মনের উন্মেষের গবেষণালব্ধ বিকল্প শিক্ষার তত্ত্ব:
          </h2>
          <p className="text-content">
            <ul className="clean-list">
              <li>
                বিষয়বস্তুতে নজর দেওয়া শেখায় না নজরের ভিতরে বোধ জাগিয়ে তোলে।।
              </li>
              <li>সংযোগ বা সংগ্রহের শিল্প।</li>
              <li>
                বিকল্প শিক্ষা পদ্ধতি শেখায় শুধু তথ্য গ্রহন নয় তথ্যের অর্থ গ্রহনই
                হল শিক্ষা।
              </li>
              <li>চেতনা এবং জ্ঞানের মধ্যেকার পর্দার অপসারন প্রক্রিয়া।</li>
              <li>শিশুর ভিতরের বোধের প্রতিবন্ধকতা অপসারন করে।</li>
              <li>মন চেতনার উপর পর্দার মত কাজ করে।</li>
              <li>শিশুর মস্তিষ্ককে কেবলমাত্র তথ্যের ভাণ্ডারে পরিণত করে না।</li>
              <li>
                শিশুদের তৈরি করে না শিশুদের নিজেদেরকে আবিষ্কার করতে শেখায়।
              </li>
              <li>শিশুর পর্যবেক্ষন ক্ষমতাকে জাগিয়ে তোলে।</li>
              <li>নিজের উপর নজরদারি করে।</li>
              <li>নির্ভরতা কমায়।</li>
              <li>শিশুর ভিতরে প্রশ্ন করার সাহস জোগায়।</li>
              <li>সহ্যক্ষমতা বাড়ায় অহংকার নয়।</li>
              <li>ভুল করলে শাস্তি দেয় না বরং ভুলকে পর্যবেক্ষণ করতে শেখায়।</li>
              <li>
                গভীর বোধ -- প্রকৃতি আমাদের কাছে আমাদের নিজের ভাবনা অনুযায়ী ধরা
                দেয়।
              </li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <MessageCircleQuestionMark size={32} color="white" />
            </div>
            মনের উন্মেষ কি এবং কেন?
          </h2>
          <p className="text-content">
            এটি কোনো নির্দিষ্ট বোর্ড বা ধর্ম বা মতাদর্শের অধীন নয়। এই বিদ্যালয়
            একটি চেতনা ভিত্তিক, মানবতাকেন্দ্রিক বিকল্প শিক্ষা প্রতিষ্ঠান - যার
            উদ্দেশ্য মস্তিষ্কে কেবল তথ্য ও দক্ষতা সঞ্চয় করা নয় বরং শিক্ষার্থীর
            অন্তর্নিহিত জ্ঞান, সংবেদনশীলতা ও দায়িত্ববোধের বিকাশ ঘটানো। এখানে
            শিক্ষা মানে সংযোগ সৃষ্টি ও অপ্রয়োজনীয় বিষয়বস্তুর সংযোগ অপসারনের
            প্রক্রিয়া - যাতে শিক্ষা স্বাভাবিকভাবে প্রকাশ পায়।
            <br />
            <br />
            <strong>মনের উন্মেষ এর মূল ভিত্তি হল :-</strong>
            <ul className="clean-list">
              <li>উপনিষদীয় চেতনা - দর্শন।</li>
              <li>কগনিটিভ সায়েন্সের জ্ঞান।</li>
              <li>মানবিক মূল্য বোধ।</li>
              <li>আধুনিক শিক্ষা বিজ্ঞান।</li>
            </ul>
            শিক্ষা মানে সংযোগ সৃষ্টি ও অপ্রয়োজনীয় বিষয়বস্তুর সংযোগ অপসারনের
            প্রক্রিয়া-- শিক্ষার এই নতুন দিক সম্বন্ধে পরে আলোচনা করা হবে।
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Lightbulb size={32} color="white" />
            </div>
            মনের উন্মেষের দর্শন
          </h2>
          <p className="text-content">
            কগনিটিভ সায়েন্স সম্বন্ধে অনেকেই হয়তো জানেন কিন্তু যারা এখনও এই
            বিদ্যা সন্বন্ধে পরিচিত হন নি, মনের উন্মেষ বিকল্প শিক্ষা পদ্ধতির মূল
            দর্শন বোঝার জন্য তাদের এই বিষয় সম্বন্ধে ধারনা থাকা দরকার। প্রেক্ষাপট
            অনুযায়ী কগনিটিভ সায়েন্সের গ্রহনযোগ্য অনেক রকম বাংলা নাম হতে পারে।
            <br />
            <br />
            <strong>যেমন :-</strong>
            <ul className="clean-list">
              <li>
                জ্ঞানতাত্ত্বিক বিজ্ঞান :- সংক্ষিপ্ত ও সহজ শিক্ষামূলক আলোচনায়
                বেশি ব্যবহৃত হলে।
              </li>
              <li>
                চিৎ বিজ্ঞান বা চেতনা তাত্ত্বিক বিজ্ঞান :- চেতনা - মন - চিন্তা -
                স্মৃতি - অভিজ্ঞতার গভীর দার্শনিক দিক নিয়ে শিক্ষামূলক আলোচনা হলে।
              </li>
            </ul>
            <br />
            <strong>
              কগনিটিভ সায়েন্স শুধু তাত্ত্বিক আলোচনাই করেই থেমে থাকে নি, এখনোও
              বিশ্বজুড়ে এর চর্চা গবেষণা জোর কদমে চলছে। বিশ্বের যে সমস্ত নামী
              বিশ্ববিদ্যালয়ে Cognitive science নিয়ে গবেষণা চলছে তাদের মধ্যে :-
            </strong>
            <ul className="clean-list">
              <li>
                MIT ( Massachusetts Institute of Technology ) :- Brain &
                cognitive science সম্বন্ধে কাজ করছে।
              </li>
              <li>Stanford University :- Cognitive science programme.</li>
              <li>UC Barkeley :- Cognitive science.</li>
              <li>Oxford :- Philosophy of Mind & Cognitive science.</li>
              <li>Cambridge :- Philosophy of Mind & Cognitive science.</li>
              <li>
                Max Planck Institute ( Germany ) :- Human Cognitive & Brain
                science.
              </li>
              <li>IISC Bangalore :- Cognitive science programme.</li>
              <li>IIT Gandhinagar :- Cognitive Science Initiative.</li>
              <li>IIT Kanpur :- Cognitive psychology, neuroscience.</li>
              <li>IIT Delhi :- Cognitive psychology, neuroscience.</li>
              <li>
                University of Hyderabad :- Cognitive Science ( ভাষা ও মন )।
              </li>
              <li>
                NBRC ( National Brain Research Centre ) :- Cognitive
                neuroscience.
              </li>
            </ul>
            <br />
            <strong>
              এইসব প্রথম সারির শিক্ষা প্রতিষ্ঠানগুলোতে Cognitive science এর যে
              সমস্ত বিষয় নিয়ে কাজ হয় :-
            </strong>
            <ul className="clean-list">
              <li>মানুষ কিভাবে শেখে?</li>
              <li>মন কিভাবে অর্থ তৈরি করে?</li>
              <li>ভাষা, চিন্তা, সিদ্ধান্ত, চেতনা কিভাবে কাজ করে?</li>
              <li>মন এবং মস্তিষ্ক সংযোগ যেভাবে হয়।</li>
              <li>ভাষা ও চিন্তার গঠন।</li>
              <li>শেখার পদ্ধতি।</li>
            </ul>
            <br />
            কিন্তু "কগনিটিভ সায়েন্স ভিত্তিক শিক্ষা" প্রাতিষ্ঠানিক শিক্ষাস্তরে
            সরাসরি স্কুলের পাঠ্যক্রমে বা শিক্ষক প্রশিক্ষণে খুব কম ক্ষেত্রে
            সচেতনভাবে প্রয়োগ হয়।
            <br />
            <br />
            যা আছে ব্রহ্মান্ডে
            <br />
            তা আছে ভাণ্ডে।
            <br />
            যা আছে দর্শনে,
            <br />
            তাই আছে বিজ্ঞানে।
            <br />
            <br />
            বিশ্ব ব্রহ্মান্ডের ছোট্ট প্রতিরূপ হল দেহরূপী এই ভাণ্ডার কাব্যিক
            অর্থে ভাণ্ড। ঠিক সেইরকমই বিজ্ঞানের অবিষ্কারের সমস্ত কিছুই বিভিন্ন
            সূত্রাকারে ভারতীয় দর্শন শাস্ত্র হিরণ্যগর্ভের ন্যায় ধারন করে আছে।
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <CircleQuestionMark size={32} color="white" />
            </div>
            মনের উন্মেষের বিকল্প শিক্ষার ইতিহাস ?
          </h2>
          <p className="text-content">
            পাতঞ্জল ঋষির যোগ সম্বন্ধে প্রথম উপদেশ হল --- ।।
            যোগশ্চিত্তবৃত্তিনিরোধ: ।।
            <br />
            এই শ্লোকের মধ্যে যে বিকল্প শিক্ষার বীজ লুকিয়ে আছে সেটা যোগীরাজ অনুভব
            করতে পেরেছিলেন। দীর্ঘ সাধনার ফলে তিনি বুঝতে পেরেছিলেন এই শ্লোকের
            অন্তর্নিহিত অর্থকে সাংসারিক প্রাতিষ্ঠানিক শিক্ষার উপযোগী করে তোলা
            যায়। তারপরেই দীর্ঘদিনের নিরলস প্রচেষ্টায় যোগের এই তত্ত্বকে সংস্করন
            করে প্রাতিষ্ঠানিক শিক্ষার বিকল্প শিক্ষা হিসেবে এক নতুন পদ্ধতিতে
            রূপদান করেছেন।
            <br />
            চিত্ত বৃত্তির নিরোধই হল যোগ। এইটাই শ্লোকের অর্থ।
            <br />
            <br />
            এই চিত্ত কি?
            <br />
            মন ইন্দ্রিয়ের মাধ্যমে প্রকৃতি থেকে এবং শরীরের ভিতর থেকে সমস্ত তথ্য
            সংগ্রহ করে। সেই তথ্য মস্তিষ্কের ভিতরের যে শক্তির মাধ্যমে আমাদের
            চেতনার সাথে সংযোগ করায় সেই শক্তিই হল চিত্ত। এই চিত্ত কিন্তু আমৃত্যু
            বিরামহীন হয়ে কাজ করে চলেছে।
            <br />
            <br />
            যোগীরাজ অলোক কুমারের মতে চিত্তকে যেভাবে নিয়ন্ত্রন করে তথ্য সংগ্রহ
            করতে হয় এবং সেই তথ্য বিশ্লেষণ করে নিজের কাজে লাগান যায় তাই হল
            শিক্ষা। এই ভাবনাকেই তিনি ধীরে ধীরে বিকল্প শিক্ষার উপযোগী করে তোলেন।
            তিনি বলেন জ্ঞান বাড়ানো যায় না জ্ঞানের ভাণ্ডার বৃদ্ধি হয়। জ্ঞান হল
            সংযোগ প্রক্রিয়া। মন ইন্দ্রিয়ের মাধ্যমে সমস্ত তথ্যকে যে প্রক্রিয়ায়
            সংগ্রহ করে মস্তিষ্কের চিত্ত নামক শক্তির কাছে পাঠায় এবং চেতনার সাথে
            সংযোগ করায় সেই প্রক্রিয়াই হল জ্ঞান। এই প্রক্রিয়াতেই বিকল্প শিক্ষার
            বীজ লুকিয়ে আছে।
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Boxes size={32} color="white" />
            </div>
            মনের উন্মেষের ভাবধারা
          </h2>
          <p className="text-content">
            <strong>
              আধ্যাত্ম সাধনায় প্রাপ্ত আত্মবিদ্যাকে সরাসরি প্রাতিষ্ঠানিক শিক্ষায়
              রূপদানের জন্য যোগীরাজ অলোক কুমার দাসের গবেষণা থেকে যে উপলব্ধির
              উদ্ভাবনা হয়েছে তা হল :-
            </strong>
            <ul className="clean-list">
              <li>জ্ঞান বৃদ্ধি হয় না।</li>
              <li>জ্ঞান সংযোগ ঘটায়।</li>
              <li>
                সংযোগের জন্য চেতনা এবং জ্ঞানের মধ্যেকার পর্দার অপসারন প্রক্রিয়া
                হল শিক্ষা।
              </li>
              <li>চেতনা কিন্তু মন নয়।</li>
              <li>মন চেতনার উপর পর্দার মত কাজ করে।</li>
              <li>
                মন ইন্দ্রিয়ের দ্বারা চিত্তের মাধ্যমে বহির্জগত এবং অন্তর্জগতের
                সমস্ত তথ্য স্মৃতি অভিজ্ঞতা কে চেতনার সাথে সংযোগ করায়।
              </li>
              <li>নজরদারি করাই হল পর্দা সরানো।</li>
            </ul>
            এই দার্শনিক ভাবনাগুলি আধুনিক কগনিটিভ সায়েন্সের সর্বোত্তম " Frontier
            question " হলেও ভারতীয় শিক্ষাব্যবস্থায় কিন্তু প্রায় অনুপস্থিত।
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Goal size={32} color="white" />
            </div>
            মনের উন্মেষের লক্ষ
          </h2>
          <p className="text-content">
            <ul className="clean-list">
              <li>
                উপনিষদীয় আত্মবিদ্যা এবং কগনিটিভ সায়েন্সের মিথস্ক্রিয়ায় প্রাপ্ত
                জ্ঞানের সাহায্যে বিকল্প শিক্ষায় :- শিশুদের তৈরি করা হয় না,
                শিশুরা নিজেকে আবিষ্কার করে।
              </li>
              <li>
                মানসিকভাবে স্বচ্ছ :- সূক্ষ মন, তথ্য, স্মৃতি, ভাষা, অভিজ্ঞতাকে
                চেতনার সাথে সংযোগ করে আত্মসচেতন, দায়িত্বশীল, কৌতুহলী নাগরিক গড়ে
                তোলা।
              </li>
              <li>শিশুর নিজের স্বভাববশে শেখার প্রবণতাকে সম্মান করা।</li>
              <li>
                সামাজিকভাবে সচেতন: প্রকৃতি, সমাজ ও নিজের সাথে গভীর সংযোগ তৈরি
                করা।
              </li>
              <li>শিশুর পর্যবেক্ষন ক্ষমতা জাগ্রত করা।</li>
              <li>
                শিক্ষায় স্বাধীনতা: সমস্ত রকমের ভয়মুক্ত, প্রতিযোগিতা মুক্ত
                শিক্ষার বাতাবরণ সৃষ্টি করা।
              </li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Heart size={32} color="white" />
            </div>
            মনের উন্মেষের বিশ্বাস
          </h2>
          <p className="text-content">
            <ul className="clean-list">
              <li>প্রকৃতি এবং গর্ভধারিনী প্রথম শিক্ষক।</li>
              <li>শিশুরা শুধু শিক্ষায় নয়, নিজের মনুষত্বকে জাগিয়ে তুলুক।</li>
              <li>প্রতিযোগিতার বদলে সহযোগিতা।</li>
              <li>সচেতনতার মাধ্যমে স্বাধীনতা।</li>
              <li>প্রকৃত শিক্ষা বিনয় আনে সহ্যক্ষমতা বাড়ায় অহংকার নয়।</li>
              <li>শিশুদের মধ্যে অনন্য সম্ভাবনার বীজ লুকিয়ে আছে।</li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Cpu size={32} color="white" />
            </div>
            মনের উন্মেষের শিক্ষা বিষয়ক মূল দর্শন
          </h2>
          <p className="text-content">
            <ul className="clean-list">
              <li>
                মনের উন্মেষ এর চেতনা ভিত্তিক বা চৈতিক দৃষ্টিকোণ :- এই বিদ্যালয়
                মানুষ তৈরি করতে চায় না, মানুষকে তার নিজের কাছে স্পষ্ট করাতে চায়।
              </li>
            </ul>
            শিক্ষা হল সংযোগ বা সংগ্রহের শিল্প।
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ fontSize: "22px" }}>
              ।। যোগীরাজ শ্রী অলোক কুমার দাস ।।
            </span>
            <ul className="clean-list">
              <li>
                শিক্ষার্থীর মনের ভাবের সাথে বাইরের প্রকৃতির এবং নিজের ভিতরের
                তথ্য আদির সংযোগের প্রক্রিয়া হল শিক্ষা।
              </li>
              <li>না জানা বা কম জানা বা ভুল জানা -- অপরাধ নয়।</li>
              <li>
                শিক্ষক - ছাত্র পারস্পরিক সম্পর্ক হল -- গভীর ভয়মুক্ত নির্ভরযোগ্য
                সম্পর্ক।
              </li>
              <li>প্রশ্ন করার ভয় লজ্জা অপসারন করা।</li>
            </ul>
            <strong>
              মনের উন্মেষের শিক্ষা বিষয়ক দর্শন দুই ধাপে প্রয়োগ হয়:-
            </strong>
            <ul className="clean-list">
              <li>জ্ঞান ও শিক্ষা সম্পর্কিত দর্শন।</li>
              <li>চেতনা - কেন্দ্রিক দৃষ্টিভঙ্গী।</li>
            </ul>
            <br />
            <strong>জ্ঞান ও শিক্ষা সম্পর্কিত দর্শন :-</strong>
            <ul className="clean-list">
              <li>শিশুদের তৈরি করা হয় না। শিশুরা নিজেদের আবিষ্কার করে।</li>
              <li>
                জ্ঞান বৃদ্ধি করা যায় না। জ্ঞানের ভাণ্ডার বৃদ্ধি হয়। জ্ঞানের
                উন্মেষ ঘটে।
              </li>
              <li>
                শিক্ষা হল এমন এক পরিবেশ সৃষ্টি করা যেখানে শিশুর অভিজ্ঞতা,
                প্রকৃতি ও সমাজের সাথে সংযোগ ঘটে।
              </li>
              <li>
                মুখস্থ নির্ভরতা ও পরীক্ষা কেন্দ্রিকতা শিক্ষার মূল উদ্দেশ্য নয়।
              </li>
              <li>
                শিশু মস্তিষ্ককে কেবলমাত্র তথ্যের ভাণ্ডারে পরিনত করা হয় না।
              </li>
              <li>নজরদারি করা শেখানো হয়।</li>
            </ul>
            <br />
            <strong>চেতনা - কেন্দ্রিক দৃষ্টিভঙ্গী :-</strong>
            <ul className="clean-list">
              <li>চেতনা হল সকল শেখার ও সকল জ্ঞানের ভিত্তি।</li>
              <li>
                চেতনা হল আড়শির মত। মন ইন্দ্রিয়ের মাধ্যমে বহির্জগত হইতে সমস্ত
                তথ্য ভাষা এবং অন্তির্জগত হইতে স্মৃতি অভিজ্ঞতা কে সংগ্রহ করিয়া
                চেতনার আড়শিতে প্রতিফলিত করায়।
              </li>
              <li>
                মন, বুদ্ধি ও তথ্য কেবল চেতনার প্রকাশ মাত্র :- চেতনা তাদের দ্বারা
                সীমাবদ্ধ নয়।
              </li>
              <li>শিক্ষার লক্ষ :- সচেতন মানুষ গঠন, কেবল কর্মক্ষম কর্মী নয়।</li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <BookOpen size={32} color="white" />
            </div>
            মনের উন্মেষের নিকট শিক্ষার সংজ্ঞা
          </h2>
          <p className="text-content">
            সংযোগ = জ্ঞান।
            <br />
            সংযোগে ভাঙ্গন = সংযোগে বাধা।
            <br />
            শিক্ষা = এই বাধা সরানো।
            <br />
            <br />
            <strong>মনের উন্মেষ বিদ্যালয় শিক্ষা বলতে যা বোঝে :-</strong>
            <ul className="clean-list">
              <li>
                অবজারভার
                <br />
                অবজারভেশন
                <br />
                অবজেক্ট
                <br />
                <br />
                এই তিনকে আলাদা ভাবা অভ্যাস করার মধ্য দিয়ে শিক্ষার শুরু।
              </li>
              <li>
                অভিজ্ঞতা, তথ্য ও ঘটনা সমূহ চেতনার সহিত সংযোগ হবার জন্য যে
                বাধাগুলি তৈরি হয়, সেগুলোকে তীক্ষ্ণ নজরদারির মাধ্যমে ধীরে ধীরে
                অপসারন করা।
              </li>
              <li>
                শিক্ষা মানে নতুন আলো জ্বালানো নয় মনের উপর জমে থাকা পর্দাগুলোকে
                সরানোই হল শিক্ষা।
              </li>
              <li>
                সূক্ষ্ম পর্দা সরানোর জন্য কিছুই করতে হয় না, তখন অবজারভেশনও নয়,
                কারন নজরদারি নিজেই আরেক নতুন পর্দা তৈরি করে।
              </li>
              <li>কিছুই না করার অভ্যাস করতে হয়।</li>
              <li>
                প্রাতিষ্ঠানিক শিক্ষাক্ষেত্রে জ্ঞান সঞ্চয়ের কথা জ্ঞানের ভাণ্ডার
                বাড়ানোর কথা বলা হয়।
              </li>
            </ul>
            <br />
            <strong>
              মনের উন্মেষের উপনিষদীয় শিক্ষা এবং আধুনিক cognitive science এর
              মিথস্ক্রিয়ায় যে বিকল্প শিক্ষা তাতে বলা হয় :-
            </strong>
            <ul className="clean-list">
              <li>জ্ঞান সঞ্চয় হয় না, বাইরে থেকে ঢোকানো যায় না।</li>
              <li>জ্ঞান হয় সংযোগে।</li>
              <li>শিক্ষা হয় বোধের প্রতিবন্ধকতা অপসারনে।</li>
              <li>শিশুদের জ্ঞানের প্রয়োজন হয় না।</li>
              <li>শিশুরা সংযোগ খোঁজে।</li>
              <li>
                এই সংযোগের জন্য যে যে বাধা আসে স্তর অনুযায়ী বয়স অনুযায়ী সেই
                বাধাগুলিকে সরানোই হল শিক্ষা।
              </li>
              <li>
                শিক্ষা হল অবজারভেশনের মাধ্যমে চেতনার উপর জমে থাকা তথ্য, ভাষা,
                স্মৃতি, ভয়, অভ্যাস নামক শব্দ অর্থ প্রত্যয় এর পর্দাকে পরিষ্কার
                করা।
              </li>
            </ul>
            <br />
            <strong>শিক্ষা সম্বন্ধে উপনিষদের তত্ত্ব :-</strong>
            <quote>
              " নৈব তত্র চক্ষু: গচ্ছতি, ন বাগচ্ছতি নো মন: --"
              <br />
              অর্থ : যা চোখে ধরা পড়ে না, বাক্যে ধরা পড়ে না, মনে ধরা পড়ে না, তবুও
              যার দ্বারা দেখা বলা ও ভাবা সম্ভব তিনিই চেতনা। এই চেতনাতেই জ্ঞান
              হয়।
            </quote>
            <ul className="clean-list">
              <li>জ্ঞান বাইরে থেকে আসে না।</li>
              <li>সত্য আগে থেকেই আছে।</li>
              <li>অজ্ঞান = আচ্ছাদন (পর্দা ) = অবিদ্যা।</li>
            </ul>
            <br />
            <strong>শিক্ষা সম্বন্ধে কগনিটিভ সায়েন্স কি বলে :-</strong>
            <ul className="clean-list">
              <li>
                মন, মস্তিষ্ক, স্মৃতি, মনোযোগ, উপলব্ধি, ভাষা, ভাবনা এইসবের
                বৈজ্ঞানিক অধ্যয়ন হচ্ছে শিক্ষা। তথ্য গ্রহন নয় তথ্যের অর্থ নির্মান
                হচ্ছে শিক্ষা।
              </li>
              <li>
                What the learner already knows is the most important factor of
                learning.
              </li>
              <li>
                শিশুর মনে আগে থেকে যে ভয়, ভুল বোঝাবুঝি, বিশ্বাস, ধারনা জমে আছে
                তাকে উপেক্ষা করে নতুন কিছু শিক্ষা সম্ভব নয়।
              </li>
              <li>মস্তিষ্ক তথ্য গ্রহন করে না।</li>
              <li>
                আগে থেকে জমে থাকা ধারনা ( স্মৃতি ) বর্তমানের উপলব্ধিকে বিকৃত
                করে।
              </li>
              <li>শেখা = ভুল ম্যাপিং ( পর্দা ) ভাঙ্গা + নতুন সংযোগ।</li>
              <li>
                ভুল করা শেখার শত্রু নয়। ভুল করায় শাস্তি হলে শেখা থেমে যায়। ভুলের
                পর্যবেক্ষন হলে শেখা গভীর হয়। ভুল মানে মস্তিষ্ক নতুন মডেল তৈরি
                করছে।
              </li>
              <li>
                মনোযোগ, ভয়, চাপ, শাস্তি মনোযোগকে সংকুচিত করে। উৎসাহ মনোযোগকে
                প্রসারিত করে।
              </li>
              <li>
                শিক্ষার প্রথম শর্ত মানসিক নিরাপত্তা। যে পরিবেশে স্বাচ্ছন্দ বোধ
                করে স্বাভাবিকভাবেই সেখানে শেখার আগ্রহ হয়।
              </li>
            </ul>
            <br />
            <quote>
              ।। উপনিষদের শিক্ষা আর কগনিটিভ সায়েন্সের ভাষা আলাদা কিন্তু ভাব
              একই।।
            </quote>
            <br />
            <br />
            <strong>দুইয়ের মিলন :-</strong>
            <ul className="clean-list">
              <li>
                <span>উপনিষদ</span>
                <span>Cognitive science</span>
              </li>
              <li>
                <span>অবিদ্যা</span>
                <span>Cognitive bias / conditioning</span>
              </li>
              <li>
                <span>সাক্ষীভাব</span>
                <span>Observation / Meta cognition</span>
              </li>
              <li>
                <span>বিদ্যা</span>
                <span>Clear seeing</span>
              </li>
              <li>
                <span>আবরণ</span>
                <span>Mental model</span>
              </li>
            </ul>
            <br />
            শিক্ষা মানে নতুন বিশ্বাস তৈরি নয়। ভুল ভাঙ্গা।
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ fontSize: "22px" }}>।।যোগীরাজ অলোক কুমার দাস।।</span>
            <br />
            <br />
            <strong>কেন এই পদ্ধতি আজ এত জরুরি :- </strong>
            <br />
            <br />
            <li>আধুনিক শিক্ষা :-</li>
            <ul className="clean-list">
              <li>তথ্য দেয়।</li>
              <li>কিন্তু দেখার ক্ষমতা দেয় না।</li>
              <li>দক্ষতা দেয়।</li>
              <li>কিন্তু বোধ দেয় না।</li>
              <li>মনুষত্বহীন দক্ষ কর্মী তৈরি হয়।</li>
            </ul>
            <br />
            <li>বিকল্প শিক্ষা দেয় :-</li>
            <ul className="clean-list">
              <li>শিক্ষাতে ফাঁক থাকে না।</li>
              <li>গোঁজামিল থাকে না।</li>
              <li>নিজস্ব বোধ তৈরি হয়।</li>
              <li>ভয়হীন সংকোচহীন চাপমুক্ত শিক্ষা।</li>
              <li>শিখতে ভালবাসে৷ শেখায় আগ্রহ আসে।</li>
              <li>ভাষা ও বাস্তবের পার্থক্য বোঝায়।</li>
              <li>নিজস্ব বোধ তৈরি হয় যে বোধ অন্যের প্রতি সহানুভূতি আনে।</li>
            </ul>
            <br />
            <strong> মনের উন্মেষ শিক্ষাঙ্গনের দার্শনিক নীতি :- </strong>
            <ul className="clean-list">
              <li>
                মনের উন্মেষ বিদ্যালয়ের বিকল্প শিক্ষা পদ্ধতির দার্শনিক নীতি কি,
                কেন এবং গুরুত্ব সম্বন্ধে জানার আগে প্রথাগত বিদ্যালয়গুলির পঠন
                পাঠন পদ্ধতি দেখা যাক।
              </li>
              <li>শিশুরা প্রশ্ন করতে সাবলীল নয়।</li>
              <li>ভুল করার অধিকার কেড়ে নেওয়া হয়।</li>
              <li>ভয়ের বাতাবরন থাকে।</li>
              <li>না বুঝেই মস্তিষ্ক তথ্য ভাণ্ডারে ভর্তি করে।</li>
              <li>যেন তেন প্রকারেন সিলেবাস শেষ করতে হবে।</li>
              <li>
                নির্দিষ্ট সময় সীমার মধ্যে সিলেবাস শেষ করার জন্য চাপ তৈরি করা হয়।
                ফলে শিক্ষক/শিক্ষিকা নিজের অভিজ্ঞতা, তথ্যের ভাণ্ডার
                ছাত্র/ছাত্রীদেরকে উজার করে দিতে পারেন না।
              </li>
              <li>প্রাপ্তি- বিষয়ের গভীরে ঢোকার ক্ষমতা তৈরি হয় না।</li>
              <li>শিক্ষিত হয় কিন্তু নির্মম হয়।</li>
            </ul>
            <br />
            <strong> মনের উন্মেষের সংক্ষিপ্ত শিক্ষন পদ্ধতি :- </strong>
            <br />
            <br />
            <li>যে ভাবে করা হয় :-</li>
            <ul className="clean-list">
              <li>পর্যবেক্ষণ ক্ষমতা জাগ্রত করা।</li>
              <li>ছোট ক্লাশ, গভীর শিক্ষা।</li>
              <li>জীবন মুখী ও ব্যবহারিক কৌশল।</li>
              <li>প্রকৃতির সংগে সংযোগ।</li>
              <li>নীরবতা/স্থিরতা।</li>
              <li>আত্মপ্রতিফলন।</li>
              <li>প্রশ্ন করার ভয় লজ্জা অপসারন করা।</li>
            </ul>
            <br />
            <li>যা করা যাবে না :-</li>
            <ul className="clean-list">
              <li>ভয় দেখিয়ে শেখানো।</li>
              <li>তাড়াহুড়ো করা।</li>
              <li>তুলনা ও Ranking.</li>
              <li>পুরস্কার - শাস্তি দিয়ে প্রেরণা।</li>
              <li>কোনো ধর্মীয় আচরন নয়।</li>
            </ul>
            <br />
            <li>শিক্ষকের ভূমিকা :-</li>
            <ul className="clean-list">
              <li>শিশুর বাধা সনাক্ত করা।</li>
              <li>প্রশ্ন করতে উৎসাহ দেন।</li>
              <li>তুলনা করেন না।</li>
              <li>তাড়াহুড়ো করেন না।</li>
              <li>শিক্ষক কোনো কর্তৃত্ব নন।</li>
              <li>শিক্ষক একজন পথ প্রদর্শক, পর্যবেক্ষক।</li>
              <li>শিক্ষক মূল্যায়ন করেন না। সামনে আয়না ধরেন। রায় দেন না।</li>
              <li>
                বিভিন্ন বয়সের শিক্ষার্থীকে এই সংযোগ পদ্ধতি শেখানোর জন্য বিভিন্ন
                প্রক্রিয়া প্রয়োগ করা হয়।
              </li>
            </ul>
            <br />
            <li>মূল্যায়ন নীতি :-</li>
            <ul className="clean-list">
              <li>শিশুকে মাপা নয়, শেখার প্রক্রিয়া বোঝা।</li>
              <li>শিশুদের নিজস্ব প্রতিফলন।</li>
              <li>পরীক্ষা কেবল প্রশাসনিক প্রয়োজনে সীমিত।</li>
            </ul>
            <br />
            <li>শৃঙ্খলা ও আচরণ নীতি :-</li>
            <ul className="clean-list">
              <li>শাস্তি নয়, বোঝাপড়া।</li>
              <li>আচরণকে সমস্যা নয়, সংকেত হিসেবে দেখা।</li>
            </ul>
            <br />
            <li>অভিভাবক নীতি :-</li>
            <ul className="clean-list">
              <li>অভিভাবক হবেন সহযোগী।</li>
              <li>নিজের অপুর্ণ আশা চাপিয়ে দেওয়া নয়।</li>
              <li>তুলনা ও প্রত্যাশা না করা।</li>
              <li>নিয়মিত সংলাপ ও কর্মশালা।</li>
            </ul>
            <br />
            <li>উপসংহার :-</li>
            <ul className="clean-list">
              <li>শিক্ষা মানুষকে তার নিজের কাছে স্পষ্ট করতে চায়।</li>
              <li>শিক্ষা বর্তমানকে সম্পুর্নভাবে দেখায়।</li>
            </ul>
            <br />
            শিক্ষা মানে কেবল তথ্য সঞ্চয় নয়, শিক্ষা মানে অন্তর্নিহিত ভাবের সাথে
            তথ্য, স্মৃতি, অভিজ্ঞতার সহজ সরল সংযোগ হওয়ার জন্য বাধা সরানো। এই
            সংযোগ কি এবং সংযোগ মূলক জ্ঞান ( Integrative / Relational knowledge )
            কিভাবে গড়ে ওঠে? সংযোগের জন্য বিশেষ করে আলাদা ভাবে কোনো চেষ্টার
            প্রয়োজন হয় না। যে সমস্ত বাধা সংযোগ হতে দেয় না সেই বাধা অপসারন হলেই
            সংযোগ ঘটে। আলো যেমন বস্তু এবং দর্শন ইন্দ্রিয়ের সাথে যোগ হলে বস্তুর
            জ্ঞান হয় সেইরকম চেতনার আলোকের সাথে তথ্য, অভিজ্ঞতা, স্মৃতি, ভাষার
            সংযোগ হলে তবেই জ্ঞান হয়।
            <br />
            চেতনার আলো কে মনের পর্দা ঢেকে রাখে তাই তথ্য অভিজ্ঞতা স্মৃতির সাথে
            চেতনার আলো সংযোগ ঘটাতে পারে না। প্রকৃতিতে তথ্য বরাবরই থাকে এবং
            অভিজ্ঞতা স্মৃতি অনবরত তৈরি হতেই থাকে। জ্ঞান হওয়ার জন্য সমস্ত উপাদানই
            আমাদের আছে প্রয়োজন শুধু মনের পর্দাকে মাঝখান থেকে হটিয়ে দেওয়া। তাহলেই
            সংযোগ ঘটবে আর এই সংযোগই হল জ্ঞান। তাই বলা হয় জ্ঞান বাড়ানো যায় না।
            <br />
            <br />
            <strong>এখন প্রশ্ন :-</strong>
            <ul className="clean-list">
              <li>যে চেতনার সাথে সংযোগের কথা বলা হচ্ছে এই চেতনা কি? </li>
              <li>মনের পর্দা কিভাবে এই চেতনাকে ঢেকে রাখে? </li>
              <li>পর্দা বলতে কি বোঝানো হচ্ছে?</li>
            </ul>
            <ul className="clean-list">
              <li>চেতনা হল : জ্ঞান</li>
              <li>
                কিন্তু জ্ঞানের বস্তু বা বিষয় নয়। তাই চেতনা বাড়ানো যায় না।
                <br />
                যে জ্ঞানের উৎস নেই। স্বয়ং সম্পুর্ন।
              </li>
            </ul>
            <ul className="clean-list">
              <li>চেতনা হল : জানা</li>
              <li>
                কিন্তু জানার ক্রিয়া নয়।
                <br />
                চেতনা কখনো অজানা নয়,
                <br />
                তাই তার জানার ক্রিয়া নেই।
                <br />
                জানার ক্রিয়া করে মন।
                <br />
                জানার ক্ষমতা দেয় চেতনা।
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                জানা = ক্রিয়া। ( Knowing an act ).
                <br />
                জানা = স্বপ্রকাশতা। ( Being aware of self ).
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                চেতনা = স্ব প্রকাশ সচেতনতা।
                <br />
                চেতনা নিজেই নিজেকে জানে এবং তার জন্য অন্য জ্ঞানের দরকার পড়ে না।
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                চেতনা = স্বাক্ষী।
                <br />
                স্বাক্ষী হওয়ার জন্য ক্রিয়ার দরকার পড়ে না।
                <br />
                স্বাক্ষী হওয়ার জন্য স্বপ্রকাশতার দরকার।
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                জ্ঞান = চেতনার প্রকাশিত রূপ।
                <br />
                জানা = মানসিক ক্রিয়া।
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                চেতনা অর্থ জ্ঞান হয়,
                <br />
                যখন জ্ঞান মানে হয় Pure awareness.
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                চেতনা মানে জ্ঞান নয়,
                <br />
                যদি জ্ঞান মানে হয় তথ্য, ধারনা, অভিজ্ঞতা।
              </li>
            </ul>
            আরশিতে প্রতিবিম্ব তৈরি হয় কিন্তু আরশির কোনো পরিবর্তন হয় না। সেইরকম
            চেতনা হচ্ছে আরশির মত, চেতনাতে জগৎ প্রতিবিম্ব তৈরি করে তাতে চেতনার
            কোনো বিকার ঘটে না। এই চেতনা আবাল বৃদ্ধ বনিতা সমস্ত মানব জাতিতেই আছে।
            চেতনাকে বাড়ানো যায় না। মন এই চেতনাকে পর্দা দিয়ে আবৃত করে রাখে। মনের
            উন্মেষের বিকল্প শিক্ষা পদ্ধতি হচ্ছে মনের তৈরি এই পর্দাকে সরিয়ে
            দেওয়া। তাহলেই চেতনার উন্মেষ মনের উপর প্রতিফলিত হবে এবং এইটাই মনের
            উন্মেষ। তখন জ্ঞান আপনা আপনিই সংযোগের কাজ করবে।
            <br />
            এই পর্দাকে কিভাবে সরাতে হয় মনের উন্মেষ সেই পদ্ধতিই শিশুদের রপ্ত করতে
            শেখায়।
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Eye size={32} color="white" />
            </div>
            মনের উন্মেষের উপলব্ধি
          </h2>
          <p className="text-content">
            <ul className="clean-list">
              <li>প্রকৃতি যেমন : আমরা কিন্তু তেমন দেখিনা।</li>
              <li>আমরা যেমন : প্রকৃতি সেইভাবে ধরা দেয়।</li>
            </ul>
            একই ছবি দুইজন দুই রকম ভাবে দেখে। কারন Cognitive filter আলাদা।
            <br />
            তাই শিশুকে শুধু তথ্য যোগান দেওয়া হয় না, বা তথ্য ও প্রকৃতি সম্বন্ধে
            চোখ খুলে দেওয়া হয় না বরং দৃষ্টির ভিতরে বোধ জাগানোর কাজ করা হয়। এই
            বোধ জাগানোর প্রক্রিয়া মনের উন্মেষ বিদ্যালয়ের সম্পুর্ন নিজস্ব গবেষণা
            লব্ধ পদ্ধতি।
            <ul className="clean-list">
              <li>
                এই শিক্ষাঙ্গনে : শিশুদের তৈরি করা হয় না,
                <br />
                শিশুরা নিজেদের আবিষ্কার করে।
              </li>
            </ul>
            প্রক্রিয়া :-
            <br />
            <li>শিশুরা নিজেরাই শেখে।</li>
            <li>
              শেখার জন্য সংযোগ প্রক্রিয়ার বাধাগুলির অপসারন করাই হল শিক্ষকের কাজ।
            </li>
            <li>পঞ্চ ইন্দ্রিয় প্রকৃতি থেকে তথ্য সংগ্রহ করে। </li>
            <li>ভিজ্যুয়াল কর্টেক্সে যায়।</li>
            <li>অত:পর আবেগ ও প্রত্যাশা যুক্ত হয়। </li>
            <li>তারপর সিদ্ধান্ত তৈরি হয়।</li>
            <ul className="clean-list">
              <li>
                Sensory data &gt;&gt; visual cortex &gt;&gt; emotion &gt;&gt;
                Prediction &gt;&gt; decision.
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                শিক্ষক : জ্ঞান হল অন্তর্নিহিত ভাব যা শুধুমাত্র তথ্য, অভিজ্ঞতা,
                স্মৃতি ও ভাষার সাথে সংযোগ হয় আর সংযোগের প্রকাশ হয় চেতনায়।এই
                সংযোগ হওয়াকেই প্রচলিত ভাষায় জ্ঞান হওয়া বলে। আর এই সংযোগ হওয়ার
                প্রক্রিয়াকেই বলে শিক্ষন প্রক্রিয়া। যিনি এই শিক্ষন প্রক্রিয়ায়
                গাইড বা মেন্টর হিসেবে কাজ করেন তিনিই হলেন শিক্ষক বা শিক্ষিকা।
              </li>
            </ul>
            <ul className="clean-list">
              <li>
                শিক্ষক যেভাবে শেখান : শিক্ষকের কাজ স্মৃতিতে তথ্যের ভাণ্ডার
                বৃদ্ধি করা নয়। সংযোগ প্রক্রিয়ায় যে যে বাধা আসে সেই বাধা অপসারন
                করাই হল শিক্ষকের কাজ। তাই শিক্ষকের কাজ কিছু দেওয়া বা যোগ করা নয়
                বাদ দেওয়া বা অপসারন করা।
              </li>
            </ul>
            <strong>
              <li>চেতনা &gt; যিনি জানেন।</li>
              <li>জ্ঞান &gt; সংযোগ।</li>
              <li>শিক্ষা &gt; সংযোগের প্রক্রিয়া।</li>
            </strong>
            <br />
            উঁচু জমি থেকে নীচের জমিতে জল দেবার জন্য উঁচু জমির আলের এক অংশ কেটে
            দিলেই জল নিজে থেকেই নীচু জমিতে চলে আসে। সিঞ্চন করে জল নীচু জমিতে
            আনার দরকার পড়ে না। জমির আল কেটে দেওয়া অর্থ শিশুদের শিক্ষার জন্য বাধা
            অপসারন করা।
            <br />
            Education is facilitation of connection between experience and
            consciousness.
            <ul className="clean-list">
              <li>
                শিক্ষা হল সংযোগ বা সংগ্রহের শিল্প।
                <br />
                জ্ঞান অর্জনে বাধা অপসারনই হল শিক্ষা।
                <br />
                জ্ঞান দেওয়া যায় না।
              </li>
            </ul>
            <ul className="clean-list">
              <li>অতএব : শিক্ষা কিন্তু জ্ঞান দেওয়া নয়।</li>
            </ul>
            <li>তথ্য</li>
            <li>অভিজ্ঞতা</li>
            <li>স্মৃতি</li>
            <li>ভাষা</li>
            <li>চেতনা বা চিৎ শক্তি।</li>
            <br />
            শিক্ষা = যে পদ্ধতিতে ১, ২, ৩ ও ৪ &gt;&gt; ৫ এর সাথে যুক্ত হয়।
            <br />
            শিক্ষা হল এমন এক শিল্প যা তথ্য অভিজ্ঞতা স্মৃতি ও ভাষাকে চেতনার সাথে
            সংযোগ ঘটিয়ে জ্ঞানকে প্রকাশ করে।
            <ul className="clean-list">
              <li>তাহলে শিক্ষা কি করে :</li>
            </ul>
            <li>শিক্ষার্থীকে প্রশ্ন করার সাহস যোগায়।</li>
            <li>ভয়মুক্ত করে, বিনম্র করে।</li>
            <li>শুধু দেখা নয়, দেখার ভিতরে বোধ তৈরি করে।</li>
            <li>বিষয়ের গভীরতা উপলব্ধি করে নিজস্ব মতামত তৈরি করে।</li>
            <li>প্রতিযোগিতা নয় আন্তরিকতা উপলব্ধি করে।</li>
            <li>পার্থক্য বোঝে।</li>
            <li>বিচ্ছিন্ন ঘটনাকে একসূত্রে গাঁথে।</li>
            <li>জ্ঞান = সংযোগ, যা বৃদ্ধি করা যায় না।</li>
            <li>শিক্ষা = সংযোগের জন্য বাধা অপসারন।</li>
            <li>
              বয়স ভেদে বাধার প্রকৃতি ভিন্ন হয়। তাই শিক্ষকের কাজও ভিন্ন ভিন্ন হয়।
            </li>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <FingerprintPattern size={32} color="white" />
            </div>
            মনের উন্মেষ বিদ্যালয়ের শেখানোর পদ্ধতি
          </h2>
          <p className="text-content">
            <strong>মূল সূত্র :-</strong>
            <ul className="clean-list">
              <li>বয়স বদলালে জ্ঞান বদলায় না।</li>
              <li>শেখার জন্য বাধার প্রকৃতি বদলায়।</li>
            </ul>
            বয়স ভেদে শিশুদের যেভাবে শেখান হয় &gt;&gt;
            <br />
            <br />
            <strong>৩-৫ বছর বয়স &gt;&gt;</strong>
            <ul className="clean-list">
              <li>ভয় ঢুকতে না দেওয়া।</li>
              <li>কোনো রকমের চাপ তৈরি না করা ।</li>
              <li>প্রধান বাধা : শিশুদের অচেনা পরিবেশে ভয় হয়। </li>
              <li>কি ঘটে : কান্না, অস্থিরতা, মন বসে না। </li>
              <br />
              <strong>ভয় অপসারন কৌশল :-</strong>
              <ul className="clean-list">
                <li>শিক্ষককে নিরাপত্তার আশ্বাস দিতে হবে। </li>
                <li>নির্দেশ মানা নয়, শিক্ষককে অনুকরন করবে। </li>
                <li>
                  শিক্ষার্থীর প্রতি সাবলীল মনোভাব থাকে। ভয়ের বাতাবরন মোটেই থাকে
                  না।{" "}
                </li>
                <li>
                  বরঞ্চ উল্টোটাই ঘটে। প্রহার করা তো দুরের কথা এমন কি চোখ দিয়ে
                  বকলেও শিশুরা ঠোট ফুলিয়ে অভিমান করে কান্না করে শিক্ষকের
                  বিরুদ্ধে নালিশ করে-- দিদি আমাকে বকেছে, স্যার আমাকে বকেছে।{" "}
                </li>
              </ul>
              <strong>পদ্ধতি :-</strong>
              <ul className="clean-list">
                <li>অঙ্গ ভঙ্গীর মাধ্যমে গল্প।</li>
                <li>স্পর্শ, তাল, ছন্দের অভ্যাস গড়া। </li>
                <li>কাজ আগে বলা পরে।</li>
              </ul>
              <li>স্লোগান : শারীরিক ভাষাই শিক্ষা। </li>
            </ul>
            <br />
            <strong>৬-৮ বছর বয়স &gt;&gt;</strong>
            <ul className="clean-list">
              <li>শিশু মনে প্রশ্ন ও প্রতীক চিহ্নের প্রবেশ।</li>
              <li>
                এই বয়সে শিশুর ভিতরে নানান কৌতুহল জাগে। তার থেকে শিশু মনে বিভিন্ন
                প্রশ্ন আসে। ( আর এখান থেকেই ভুল শিক্ষা শুরু হয় )।
              </li>
              <li>
                অবাস্তব প্রশ্নের কোনো উত্তর না হলেও, - বাহ্ ভাল প্রশ্ন করেছ বলে
                উৎসাহ দিতে হবে। তোমার মনে এইরকম প্রশ্ন কেন এলো বলো তো!
              </li>
              <li>প্রধান বাধা : প্রশ্ন দমন।</li>
              <br />
              <strong>কি ঘটে :-</strong>
              <ul className="clean-list">
                <li>প্রশ্নের চেয়ে পাঠ্যসূচী বেশী গুরুত্বপূর্ণ হয়ে যায়।</li>
                <li>শিশুকে শেখানো হয় -- এখন এটা জিজ্ঞেশ কোরো না। </li>
              </ul>
              <li>ফল কি হয় : শিশুর স্বভাবজাত কৌতুহল নিস্তেজ হয়ে যায়।</li>
              <li>
                অপসারন কৌশল : শিশুর মনে যখনই প্রশ্ন আসবে সেই প্রশ্ন করতে উৎসাহ
                দিতে হবে। প্রশ্ন করতে যেন ভয় না পায় সংকোচ যেন না হয়।
              </li>
              <li>স্লোগান : জিজ্ঞাশাই শিক্ষার শিকড়।</li>
            </ul>
            <br />
            <strong> ৯ - ১২ বছর বয়স &gt;&gt; </strong>
            <ul className="clean-list">
              <li>প্রধান বাধা : প্রতীক আগে, অভিজ্ঞতা পরে।</li>
              <li>কি ঘটে : সংখ্যা অক্ষর সূত্র - সব আগে আসে।</li>
              <li>ফল : শিশু প্রতীক চেনে - বাস্তব বোঝে না।</li>
              <br />
              <strong>অপসারন কৌশল :-</strong>
              <ul className="clean-list">
                <li>কম - বেশী পার্থক্য দিয়ে সংখ্যার ধারনা তৈরি করা৷</li>
                <li>কত পা হাটলাম।</li>
                <li>
                  বন্ধুরা ভাগাভাগি করে নেওয়া এইভাবে সংখ্যার ধারনা তৈরি হয়।
                </li>
                <li>ইশারা দিয়ে কিছু বলে সেই ইশারাকে কথায় বলতে দেওয়া।</li>
                <li>মুখে না বলে কিছু কাজ করে সেই কাজকে কথায় বোঝানো।</li>
                <li> একটা গল্প বলে সেই গল্পকে যত সম্ভব ছোট্ট করে আবার বলা।</li>
              </ul>
              <li>স্লোগান : কল্পনাই বাস্তবের ভিত্তি।</li>
              <li>
                ঘোষনা : শিশু প্রস্তুত হয় জীবনের জন্য নয় বরং জীবনকেই শেখার
                ক্ষেত্র হিসেবে আবিষ্কার করে।
              </li>
            </ul>
            <br />
            <strong>১৩ - ১৫ বছর বয়স &gt;&gt;</strong>
            <ul className="clean-list">
              <li>প্রধান বাধা : তুলনা শুরু।</li>
              <li>কি ঘটে : এই বয়সেই বলা শুরু হয়, ও পারছে তুমি পারছো না।</li>
              <li>ফল : আত্মবিশ্বাসে ফাটল।</li>
              <li>ফল : আত্মবিশ্বাসে ফাটল।</li>
              <li>স্লোগান : প্রতিযোগিতা নয় সহমর্মিতাই শ্রেয়।</li>
            </ul>
            <br />
            <strong>কিশোর-কিশোরী &gt;&gt;</strong>
            <ul className="clean-list">
              <li>প্রধান বাধা : সঠিক উত্তরে আসক্তি।</li>
              <li>কি ঘটে : ভাবনা নয়, উত্তর গুরুত্বপূর্ণ।</li>
              <li>ফল : চিন্তার স্বাধীনতা কমে।</li>
              <br />
              <strong>অপসারন কৌশল :-</strong>
              <ul className="clean-list">
                <li>শিক্ষক: তুমি কিভাবে ভাবলে?</li>
                <li>একাধিক উত্তর গ্রহন।</li>
                <li>শিক্ষককে ভুলের স্বাভাবিকতা বোঝাতে হবে।</li>
              </ul>
              <li>স্লোগান : মগজের শান, ব্যার্থতার অবসান।</li>
            </ul>
            <br />
            <li> জ্ঞান - অন্তর্নিহিত</li>
            <li> জীবন - পাঠক্রম</li>
            <li> নিজের - মুল্যায়ন</li>
            এই তিন প্রক্রিয়ার মাধ্যমে মনুষ্যত্বের বিকাশ হয়।
            <br />
            <br />
            <li> জ্ঞান অন্তর্নিহিত :- </li>
            <ul className="clean-list">
              <li>
                উপনিষদীয় আধ্যাত্ম বিদ্যা এবং আধুনিক Cognitive science এর
                বস্তুনিষ্ঠ constructivism এর আলোকে যে জ্ঞান সেই জ্ঞানেরই চর্চার
                প্রয়োজন।{" "}
              </li>
            </ul>
            <li> জীবনই পাঠক্রম :-</li>
            <ul className="clean-list">
              <li>
                পাঠক্রম প্রচলিত অর্থে &gt; বিষয় &gt; অধ্যায় &gt; সময়সূচী &gt;
                পরীক্ষা।
              </li>
            </ul>
            <li>
              পাঠক্রম মনের উন্মেষের দৃষ্টিতে &gt; মনের ভিতর যে রুপান্তর ঘটাতে
              চাই তার জন্য ধারাবাহিক অভিজ্ঞতার বিন্যাস।
            </li>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <ScanEye size={32} color="white" />
            </div>
            মনের উন্মেষের দৃষ্টিতে জীবনের পাঠক্রম
          </h2>
          <p className="text-content">
            <li> জীবনের ঘটনা : অন্তর্নিহিত শিক্ষা</li>
            <li> ক্ষুধা : প্রয়োজন বোঝা</li>
            <li> কাজ করতে ক্লান্তি : সীমা বোঝা</li>
            <li> ভয় : নিরাপত্তার ভ্রান্ত ধারনা।</li>
            <li> দ্বন্দ : সম্পর্কের গঠন</li>
            <li> মৃত্যু দেখা : পরিণতি মেনে নেওয়া।</li>
            প্রথাগত স্কুল থেকে জীবনের এইসমস্ত পাঠ পাওয়া যায় না।
            <br />
            <br />
            <strong>
              চারটি শর্ত পুরন করলে নিজের জীবন থেকে পাঠ নেওয়া যায় :-
            </strong>
            <ul className="clean-list">
              <li> মনোযোগ।</li>
              <li>প্রতিফলন।</li>
              <li> পুনরাবৃত্তি।</li>
              <li>নিজের মুল্যায়ন।</li>
            </ul>
            <li>মনোযোগ :-</li>
            <ul className="clean-list">
              <li>কাজ ধীরে করো।</li>
              <li>কাজ শেষ করো নয়, নজর রাখো, গুরুত্বপুর্ন।</li>
              <li>
                ঘটনা সবার জীবনে ঘটে কিন্তু শেখা হয় যখন কাজের প্রতি মনের সংযোগ
                থাকে।
              </li>
            </ul>
            <li>প্রতিফলন :-</li>
            <ul className="clean-list">
              <li>কি ঘটল নয়।</li>
              <li>কিভাবে প্রতিক্রিয়া দিলাম।</li>
              <li>জীবন তখন নিজের আয়না হয়।</li>
            </ul>
            <li>পুনরাবৃত্তি :-</li>
            <ul className="clean-list">
              <li>একই কাজ বারবার।</li>
              <li>একই প্রশ্ন প্রতিদিন।</li>
              <li>একই নীরবতা প্রতিদিন।</li>
              <li>বারবার &gt; অভ্যাস &gt; স্বভাব &gt; সংস্কার ।</li>
            </ul>
            <li>নিজের মুল্যায়ন :-</li>
            <ul className="clean-list">
              <li>ছাত্র: রাগ হলে কি করবো?</li>
              <li>শিক্ষক : রাগ আসার আগের মুহুর্তে তুমি কি ছিলে?</li>
              <li>এইটাই জীবনের পাঠ।</li>
              <li>নিজের ভুল নিজে দেখা এবং শোধরানোর চেষ্টা।</li>
            </ul>
            <br />
            জীবন এক সিলেবাস যখন ভোগ করা নয়, সজাগ থাকা হয়।
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ fontSize: "22px" }}>
              ।। যোগীরাজ শ্রী অলোক কুমার দাস ।।
            </span>
          </p>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious1}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer1Ref}>
              <div className="pic1">
                <img src={pic1} alt="pic1" />
              </div>
              <div className="pic2">
                <img src={pic2} alt="pic2" />
              </div>
              <div className="pic3">
                <img src={pic3} alt="pic3" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext1}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious2}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer2Ref}>
              <div className="pic4">
                <img src={pic4} alt="pic4" />
              </div>
              <div className="pic5">
                <img src={pic5} alt="pic5" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext2}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious5}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer5Ref}>
              <div className="pic12">
                <img src={pic12} alt="pic12" />
              </div>
              <div className="pic13">
                <img src={pic13} alt="pic13" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext5}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious3}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer3Ref}>
              <div className="pic6">
                <img src={pic6} alt="pic6" />
              </div>
              <div className="video2">
                <video
                  src={video2}
                  playsInline
                  controls
                  onPlay={handleVideoPlay1}
                  onPause={handleVideoPause1}
                  onEnded={handleVideoPause1}
                />
                <div className="play-button"></div>
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext3}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious7}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer7Ref}>
              <div className="pic18">
                <img src={pic18} alt="pic18" />
              </div>
              <div className="pic19">
                <img src={pic19} alt="pic19" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext7}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious6}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer6Ref}>
              <div className="pic15">
                <img src={pic15} alt="pic15" />
              </div>
              <div className="pic16">
                <img src={pic16} alt="pic16" />
              </div>
              <div className="pic17">
                <img src={pic17} alt="pic17" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext6}
            >
              &#8250;
            </button>
          </div>

          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious4}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer4Ref}>
              <div className="pic7">
                <img src={pic7} alt="pic7" />
              </div>
              <div className="pic8">
                <img src={pic8} alt="pic8" />
              </div>
              <div className="pic9">
                <img src={pic9} alt="pic9" />
              </div>
              <div className="pic10">
                <img src={pic10} alt="pic10" />
              </div>
              <div className="pic11">
                <img src={pic11} alt="pic11" />
              </div>
              <div className="pic14">
                <img src={pic14} alt="pic14" />
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext4}
            >
              &#8250;
            </button>
          </div>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <PersonStanding size={32} color="white" />
            </div>
            'মনের উন্মেষ' স্কুলের পরিবার
          </h2>
          <div className="image-section">
            <button
              className="scroll-button scroll-button-left"
              onClick={handlePrevious8}
            >
              &#8249;
            </button>
            <div className="image-scroll-container" ref={scrollContainer8Ref}>
              <div className="pic20">
                <img src={pic20} alt="pic20" />
              </div>
              <div className="video3">
                <video
                  src={video3}
                  playsInline
                  controls
                  onPlay={handleVideoPlay2}
                  onPause={handleVideoPause2}
                  onEnded={handleVideoPause2}
                />
                <div className="play-button"></div>
              </div>
              <div className="video4">
                <video
                  src={video4}
                  playsInline
                  controls
                  onPlay={handleVideoPlay2}
                  onPause={handleVideoPause2}
                  onEnded={handleVideoPause2}
                />
                <div className="play-button"></div>
              </div>
            </div>
            <button
              className="scroll-button scroll-button-right"
              onClick={handleNext8}
            >
              &#8250;
            </button>
          </div>

          <div className="catchphrase">"প্রতিদিন শিক্ষা, প্রতিদিন পরীক্ষা"</div>
        </div>

        {showButton && (
          <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={28} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeBengali;
