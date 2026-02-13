import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Users,
  Target,
  Lightbulb,
  Brain,
  Star,
  CheckCircle,
  ArrowUp,
  School,
  ArrowRight,
  Goal,
  Cpu,
  Eye,
  Workflow,
  Sparkle,
  Flag,
  Presentation,
  PersonStanding,
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

const Home = () => {
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
          <div className="dialogue1">
            <p>Moner</p>
          </div>
          <div className="dialogue2">
            <p>Unmesh</p>
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
              <img src={first} />
            </div>
            <div className="seconds">
              <img src={second} />
            </div>
            <div className="right-img">
              <img src={logo2} alt="Logo" />
            </div>
            <div className="lasts">
              <img src={last} />
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div className="main-card">
          <div className="hero-section">
            <h1 className="hero-title">Moner Unmesh</h1>
            <p className="hero-subtitle">The Blooming of the Mind</p>
            <button
              className="discover-more-btn"
              onClick={() => navigate("/link")}
            >
              Discover More
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="slogan">
            Our Slogan: "A SPIRIT OF KNOWLEDGE INSPIRED BY COOPERATION INSTEAD
            OF COMPETITION"
          </div>

          <div className="video1">
            <video src={video1} playsInline controls />
            <div className="play-button"></div>
          </div>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Lightbulb size={32} color="white" />
            </div>
            Our Philosophy
          </h2>
          <h3 className="subsection-header">
            Learning from Nature, Growing with Purpose
          </h3>
          <p className="text-content">
            Human consciousness transcends through experience with nature and
            the world around us. Ancient wisdom-keepers—the Vedic sages, Buddha,
            Mahavira, Jesus—all learned this way. Nature was their teacher, and
            it became ours too.
          </p>
          <h3 className="subsection-header">What Makes Us Different</h3>
          <p className="text-content">
            Today's education fills minds with information. We believe in
            brownian motion of minds through experience. Modern schools creates
            pressure and disconnects from nature. We nurture curiosity and
            creativity. The result? Children who are balanced, compassionate,
            and truly alive. Where respect isn't taught—it's felt.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Goal size={32} color="white" />
            </div>
            Our Goal
          </h2>
          <p className="text-content">
            We aim to create human beings who are:
            <ul className="clean-list">
              <li>
                <strong>Physically strong:</strong> Healthy body, active
                lifestyle.
              </li>
              <li>
                <strong>Mentally clear:</strong> Sharp mind, focused attention.
              </li>
              <li>
                <strong>Emotionally stable:</strong> Balanced feelings, inner
                peace.
              </li>
              <li>
                <strong>Socially conscious:</strong> Caring for others,
                community-minded.
              </li>
              <li>
                <strong>Spiritually aware:</strong> Connected to something
                greater than oneself.
              </li>
            </ul>
            Not just successful—but whole.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Brain size={32} color="white" />
            </div>
            Our Belief
          </h2>
          <h3 className="subsection-header"></h3>
          <blockquote className="quote-box">
            Only when a person understands himself, can he truly understand the
            world.
          </blockquote>
          <ul className="clean-list">
            <li>
              <strong>Nature as teacher:</strong> Trees, rivers, animals, sky,
              earth—everything teaches.
            </li>
            <li>
              <strong>Cooperation over competition:</strong> We awaken
              compassion, not rivalry.
            </li>
            <li>
              <strong>Freedom through awareness:</strong> Discipline comes from
              understanding, not fear.
            </li>
            <li>
              <strong>Unique potential:</strong> Every child learns at their own
              pace, in their own way.
            </li>
            <li>
              <strong>Humility with knowledge:</strong> Learning should bring
              clarity, not arrogance.
            </li>
          </ul>

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

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Eye size={32} color="white" />
            </div>
            Our Vision
          </h2>

          <p className="text-content">
            Every child especially those from forgotten communities deserves
            education that:
            <ul className="clean-list">
              <li>
                <strong>Sparks curiosity instead of killing it.</strong>
              </li>
              <li>
                <strong>Builds confidence instead of fear.</strong>
              </li>
              <li>
                <strong>Creates thinkers instead of memorizers.</strong>
              </li>
              <li>
                <strong>Nurtures respect—for self and others.</strong>
              </li>
            </ul>
            Moner Unmesh: where the spirit of learning awakens because every
            child deserves to understand, not just pass. Thus, Moner Unmesh
            school not only ensures education for children but also supports
            families in overcoming financial challenges, giving equal importance
            to both learning and livelihood.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Cpu size={32} color="white" />
            </div>
            Our Thinking
          </h2>
          <p className="text-content">
            Cooperation over competition while not beat your classmate but grow
            together.
            <br />
            <br />
            The difference-
            <ul className="clean-list">
              <li>
                <strong>Other schools ask: </strong>"What did you score?"
              </li>
              <li>
                <strong>We ask: </strong>"What did you understand?"
              </li>
              <li>
                <strong>Other schools say: </strong>"Learn this."
              </li>
              <li>
                <strong>We say: </strong>"Let's discover this together."
              </li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Workflow size={32} color="white" />
            </div>
            Our Approach
          </h2>
          <p className="text-content">
            Every child has natural attractions lying dormant within them. Our
            work is simple but profound: we create an environment where these
            attractions bloom.
          </p>
          <div className="highlight-box">
            <p
              className="text-content"
              style={{
                marginBottom: 0,
                textAlign: "center",
                fontSize: "1.7rem",
                fontWeight: 700,
              }}
            >
              <strong>From REPEAT → to HABIT → to NATURE → to SANKSAR</strong>
            </p>
          </div>
          <p className="text-content">
            This is how deep, lasting learning happens.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Sparkle size={32} color="white" />
            </div>
            Why is Moner Unmesh needed as an alternative education?
          </h2>

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

          <p className="text-content">
            The world is filled with stress, competition, and disconnection. We
            offer an alternative.
          </p>
          <p className="text-content">
            A child's mind is like soft clay. Shaped with care, love, and
            wisdom, it becomes beautiful. Here, children don't just prepare for
            life—they learn to live fully, with joy, purpose, and peace.
          </p>
          <p className="text-content">
            Moner Unmesh — where education brings light, not confusion. Where
            life becomes beautiful, meaningful, and harmonious. This alternative
            path to education has always been needed. It is needed now. It will
            always be needed.
          </p>
          <p className="text-content">
            "Moner Unmesh" means the blooming of the Mind. We don't just store
            knowledge—we awaken the desire to discover it. A school where child
            doesn't just learn math—they understand numbers. Where competition
            gives way to cooperation. Education is not filling a bucket—it's
            removing the walls that block understanding. We believe every child
            has natural curiosity.
          </p>
          <ul className="bullet-list">
            <li>
              <strong>Our job? </strong>Remove the obstacles that stand between
              a child and true learning.
            </li>
          </ul>
          <p className="text-content">
            Learning through children's touch, build, and discover ancient vedic
            methods. Every lesson connects to real life.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Heart size={32} color="white" />
            </div>
            What is Moner Unmesh and Why?
          </h2>

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

          <p className="text-content">
            Moner Unmesh is an alternative educational institution with a
            powerful belief: real education isn't just about books, classrooms,
            and teachers. Real learning happens in the mind. We believe that
            communicating your mind deeply with any subject—for as long as you
            desire—is what true learning means. Education needs a mind that's
            ready and eager to grow.
          </p>

          <h3 className="subsection-header">
            The Mind That Learns (The Nature Analogy)
          </h3>
          <p className="text-content">
            Every creature has a mind, but the human mind is uniquely powerful.
            Animals with simpler minds learn very little because they're born
            already knowing what they need to survive. They have a little bit of
            scope to develop their mind.
          </p>

          <p className="text-content">
            <strong>The Turtle:</strong> A mother turtle lays her eggs on a
            beach and returns to the ocean. When the babies hatch, they
            instinctively head straight to the sea—no one taught them. They were
            born knowing.
          </p>

          <p className="text-content">
            <strong>The Mosquito:</strong> No mosquito mother teaches her young
            to seek blood. Yet they're born with this knowledge hardwired into
            them. Their minds are too simple to learn the way humans do.
          </p>

          <p className="text-content">
            <strong>The Human:</strong> But humans are different. A
            two-month-old baby will put both dirt and candy into their
            mouth—they aren't born knowing what's food and what isn't. A mother
            must teach them. This is because humans learn through the mind. The
            mind is our learning tool.
          </p>

          <h3 className="subsection-header">
            What Makes Moner Unmesh Different?
          </h3>

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

          <p className="text-content">
            Moner Unmesh doesn't "teach" in the traditional way. Instead, we
            help you master the art of attracting your mind to any subject.
            Through our research-based alternative system, we develop your mind
            to make it ready for deep learning. The ability to hold your mental
            focus on a subject grows stronger with practice—and we guide that
            process. Our unique methods and theories help you learn how to
            learn. The truth is: you teach yourself. We simply show you the way.
          </p>

          <h3 className="subsection-header">The Critical Difference</h3>
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
          <p className="text-content">
            In conventional schools, students are forced to memorize. Only those
            who naturally know how to connect their minds truly learn.
            Traditional education never teaches this crucial skill—how to
            connect your mind to what you're studying. Moner Unmesh doesn't just
            deliver content. We awaken the learner within you.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Users size={32} color="white" />
            </div>
            Context: An Education Revolution for India
          </h2>

          <h3 className="subsection-header">The Problem We Face</h3>
          <p className="text-content">
            Since Independence, India has made great strides—over 90% of
            children now enroll in school. But enrollment isn't enough. The real
            question is: Are children truly learning?
          </p>

          <p className="text-content">
            In classrooms, students memorize for marks, not understanding.
            Teachers struggle to explain the "why" behind concepts.
            <ul className="clean-list">
              <li>Why we multiply length × breadth for area?</li>
              <li>Why is the practical use of LCM?</li>
              <li>
                What is the real difference between adding and multiplying?
              </li>
              <li>
                What is the real difference between subtracting and dividing?
              </li>
            </ul>
            At home, parents tell children to "focus" but cannot show them how.
            The result is that children pass exams but do not understand.
          </p>

          <h3 className="subsection-header">
            Who We Serve: The Santali Children
          </h3>
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
          <p className="text-content">
            We open our doors exclusively to children from the Santali tribal
            community—often the first in their families to ever attend school.
            Because learning shouldn't stop for lack of resources, we provide:
          </p>

          <ul className="clean-list">
            <li>Nutritious midday meals (hungry minds need fed bodies).</li>
            <li>Uniforms (dignity for every child).</li>
            <li>Books and materials (tools to unlock potential).</li>
            <li>A safe space to grow, question, and discover.</li>
          </ul>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Flag size={32} color="white" />
            </div>
            Teaching Objectives
          </h2>
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
          <ul className="clean-list">
            <li>
              Making children understand the importance of Education in life.
            </li>
            <li>
              Why learn Mathematics and how we can apply mathematics in our
              life.
            </li>
            <li>
              <strong>How We Teach numbers? </strong>We don't rush to
              calculations. We help children feel the difference between adding
              and multiplying. We make abstract concepts to concrete and real.
            </li>
            <li>
              Understanding addition, subtraction, multiplication and division
              concepts.
              <br /> Difference between addition and multiplication.
              <br /> Difference between subtraction and division
            </li>
            <li>
              The toungue exercise is Moner Unmesh's self research oriented
              discovery which is perfect way to learn pronunciation.
            </li>
            <li>The formula behind the spelling of every Bengali word.</li>
            <li>Learn about nature: birds, animals, plants, waterbody.</li>
            <li>How to unfold mind and increase Thinking power.</li>
            <li>Mind power with Yoga and breathing exercise.</li>
            <li>Minimize wants and concentrate on expectations.</li>
            <li>Different ethics and uses in everyday life.</li>
            <li>Learn by testing it everyday.</li>
            <li>Physical exercise, sports, wrestling, martial arts.</li>
            <li>English and computer skills for today's world.</li>
            <li>Prepare for self, family and duty towards nation.</li>
            <li>How to use pride, ego and self-esteem.</li>
          </ul>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Presentation size={32} color="white" />
            </div>
            How Children Learn Here?
          </h2>
          <h3 className="subsection-header">How Children Learn Here</h3>
          <ul className="clean-list">
            <li>
              <strong>Through Real Life:</strong> Farming • Gardening • Cooking
              • Cleaning • Building
            </li>
            <li>
              <strong>Through Joy:</strong> Music • Dance • Drama • Art •
              Storytelling • Nature exploration
            </li>
            <li>
              <strong>Through Inner Work:</strong> Meditation • Silence •
              Reflection • Self-observation
            </li>
            <li>
              <strong>Through Community:</strong> Cooperation • Service •
              Responsibility • Empathy
            </li>
          </ul>

          <p className="text-content">
            Children learn by doing real work with their own hands. They
            discover that every task—from planting seeds to solving
            problems—teaches something valuable.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Target size={32} color="white" />
            </div>
            Detailed Methodology
          </h2>

          <h3 className="subsection-header">1. Small Classes, Deep Learning</h3>
          <p className="text-content">
            Traditional schools pack 30-60 students into one classroom. One
            teacher, 40 minutes, too many minds—how can anyone truly understand
            if learning is happening? At Moner Unmesh, we do it differently:
          </p>
          <ul className="clean-list">
            <li>5 students per teacher.</li>
            <li>No fixed time limits per subject.</li>
            <li>
              Learning happens in classrooms, under trees, in nature's lap.
            </li>
            <li>No heavy books at primary level.</li>
          </ul>
          <p className="text-content">
            Teachers watch each child's face, read their expressions, and know
            when real learning happens. If one subject takes the whole day to
            master, that's exactly what we do.
          </p>

          <h3 className="subsection-header">2. No Fear, No Force</h3>
          <p className="text-content">
            A tortoise hides in its shell when afraid. Children do the same with
            their minds. Our philosophy is simple: No punishment, No forced
            learning, No creating fear. Fear kills curiosity. Force stops the
            blooming of the mind. We choose love instead.
          </p>

          <h3 className="subsection-header">3. Teaching Root Understanding</h3>
          <p className="text-content">
            Children learn to ask "Why?" before accepting "What." When they
            understand the root of things, conflicts disappear. When conflicts
            disappear, violence has no place to grow.
          </p>

          <h3 className="subsection-header">
            4. Life Education, Not Just Religious Rituals
          </h3>
          <p className="text-content">
            We don't teach narrow beliefs that divide people. Instead, we teach:
            <ul className="clean-list">
              <li>Love for all humans.</li>
              <li>Respect for all religions' noble teachings.</li>
              <li>Responsibility toward society.</li>
              <li>Gender equality.</li>
              <li>Living in harmony with nature.</li>
              <li>Freedom from superstition.</li>
              <li>How to be content with less.</li>
              <li>When to show respect and when to question.</li>
            </ul>
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <BookOpen size={32} color="white" />
            </div>
            Practical Learning Strategies
          </h2>

          <p className="text-content">
            <strong>Building Responsibility:</strong> Two students arrive early
            each day to open the school gates, prepare classrooms, and create a
            welcoming environment. Once a month, they even decide the lunch
            menu. This small responsibility grows into love for school, then
            home, then village, then country.
          </p>

          <p className="text-content">
            <strong>Cultivating Love and Service:</strong> Students plant
            saplings in clay pots. They water them, watch them grow, and fall in
            love with their trees. Through this simple act, they learn to care,
            to serve, to nurture life.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <School size={32} color="white" />
            </div>
            How We Teach Specific Subjects
          </h2>

          <p className="text-content">
            <strong>Mathematics:</strong> Before numbers and equations, we ask:
            What is a number? Children discover that numbers are imaginary—yet
            they solve real problems. They learn why we add, when to multiply,
            how division actually works. Math becomes play, not punishment.
          </p>

          <p className="text-content">
            <strong>Language:</strong> Through unique Tongue Exercises (a yogic
            practice), children master clear pronunciation. Tongue twisters help
            them speak fluently. They don't just memorize spelling rules—they
            understand why words are spelled that way.
          </p>

          <p className="text-content">
            <strong>Science:</strong> We teach the difference between seeing and
            observing. Children visit forests and water bodies to understand how
            nature works, not just read about it in books.
          </p>

          <p className="text-content">
            <strong>Life Skills:</strong> Understanding wants vs. needs,
            controlling greed, building mental strength through Yoga and
            Pranayama, handling difficult situations without running away, and
            knowing when ego helps and when it harms.
          </p>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <Star size={32} color="white" />
            </div>
            The 15 Core Principles
          </h2>

          <ol className="numbered-list">
            <li>Why study? Children understand the purpose before starting.</li>
            <li>
              Math as play - Playing with numbers, understanding their magic.
            </li>
            <li>Real-world connections - How will this help in daily life?</li>
            <li>Seeing vs. Observing - Training minds to truly notice.</li>
            <li>Nature as teacher - Learning from forests, rivers, animals.</li>
            <li>
              Coexistence - Newton's Third Law applies to life: give love,
              receive love.
            </li>
            <li>School as home - A place of warmth, belonging, and safety.</li>
            <li>Mind-body strength - Through Asanas and Pranayama.</li>
            <li>Contentment - Fighting the "more, more, more" mentality.</li>
            <li>Applied morality - Not memorizing values, but living them.</li>
            <li>
              Daily learning, daily testing - No exam pressure, continuous
              growth.
            </li>
            <li>
              Complete development - Yoga, Lathi Khela (Indian martial art),
              wrestling, computers, English.
            </li>
            <li>Understanding ego - When to use it, when to let it go.</li>
            <li>Duty and responsibility - To self, family, society, nation.</li>
            <li>
              A living laboratory - Building a philosophy of life that works in
              reality.
            </li>
          </ol>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <CheckCircle size={32} color="white" />
            </div>
            Rules and Regulations
          </h2>

          <div className="rules-section">
            <p>
              1) There will be 4 days of holidays per month in Mind Formation
              School. Two days of Ekadashi, one day of Amavasya (New Moon), and
              one day of Purnima (Full Moon)—totaling 4 days of holidays in a
              month. Additionally, all holidays according to government rules
              will be applicable here.
            </p>
            <p>
              2) Every day, school will start at 8 AM and break will be at 2 PM.
            </p>
            <p>
              3) At 12 PM in the school dining hall, there will be a half-hour
              rest after the midday meal provided by the school.
            </p>
            <p>
              4) At the primary level, students must come to school every day
              wearing the clean uniform provided by the school.
            </p>
            <p>
              5) Students must be present in school for 90% of the days the
              school is open.
            </p>
            <p>
              6) Staying absent from school is not allowed except for special
              illness or any special accident at home.
            </p>
            <p>
              7) Once arrived at school, one cannot go outside the school before
              the final break. If any special situation arises, leaving may be
              considered subject to the permission of the authorities to handle
              that situation.
            </p>
            <p>
              8) A government-degreed doctor will record the physical and mental
              development of every student of the school every month. Primary
              physical treatment will be done from the school itself.
            </p>
            <p>
              9) Arrangements will be made for the students of this school to
              take Madhyamik (Secondary) and Higher Secondary examinations from
              another school. Students of the school at the primary level will
              not study with any other tutor.
            </p>
            <p>
              10) Judging the merit of every student, help will be provided in
              selecting their future career.
            </p>
            <p>
              11) Arrangements for financial assistance (not a promise) will be
              made for higher education according to merit and for preparation
              for higher education.
            </p>
            <p>
              12) This school does not arrange for students' education in
              exchange for any money or material help from parents.
            </p>
            <p>
              13) The same student cannot study in two schools simultaneously.
              This rule applies here as well.
            </p>
            <p>
              14) The school authorities will supply all necessary materials for
              primary level education to the students for studying at school.
            </p>
            <p>
              15) Every month, the teachers of the school will also be evaluated
              on how much and how they are presenting themselves as teachers to
              the students. Does their method of teaching increase the students'
              interest? Students' opinions will also be taken in the method of
              evaluating teachers.
            </p>
            <p>
              16) In this school, there will be no obligation to move to the
              next class through annual examinations. This school will follow
              the government curriculum. Additionally, students will learn
              according to the curriculum created by the school authorities.
              Only when the curriculum is finished will that student get the
              opportunity to study in the next class. In this way, one may get
              the opportunity to study in the next class within one year. Again,
              if the curriculum is not finished within one year, they may have
              to stay in the same class for two years.
            </p>
            <p>
              17) If improvement is observed in teachers during three
              consecutive teaching evaluations, they will be given an incentive
              allowance; on the other hand, if a decline is observed in teaching
              evaluation, their incentive allowance will be cancelled.
            </p>
            <p>
              18) The school will consider all these students as its own
              children and through providing education in that manner, will help
              them become not only degree-holders but honest, active, and humans
              with firm mental strength. Trying to make them educated in this
              education is the sole objective of Moner Unmesh School.
            </p>
          </div>

          <h2 className="section-header">
            <div className="icon-wrapper">
              <PersonStanding size={32} color="white" />
            </div>
            Family of Moner Unmesh School
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

          <div className="catchphrase">
            "EVERYDAY EDUCATION, EXAMINATION EVERYDAY"
          </div>
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

export default Home;
