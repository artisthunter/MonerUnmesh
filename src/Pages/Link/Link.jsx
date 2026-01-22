import React, { useEffect, useState } from 'react'
import './Link.css'

const Link = () => {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <div className="home">
      
      <div className="document-container">
        <h1 className="main-title">
          Moner Unmesh (Blooming of the Mind) School
        </h1>

        <div className="contents">
          <p className="paragraph">
            Human life grows only when the inner consciousness awakens. In
            nature, every rise comes through a fall, every decline gives birth
            to a new rise. In the same way, through our constant interaction
            with the environment and our own nature, an inner awakening
            gradually takes place within us. Lifelong learning happens from this
            experience. Nature is our true teacher. Ancient civilizations — the
            Vedic sages, the Buddha, Mahavira, Jesus, and many others — attained
            realization only through this inner awakening. They learned through
            nature. That education made them understand life, society, the
            world, and themselves.
          </p>

          <p className="paragraph">
            But today's education system is vastly different. Modern education
            is heavily dependent on books and theories. The human mind is made
            restless with endless information; children are burdened and
            pressured. The result is a disconnection between human beings and
            nature, a breakdown of balance in society and in human
            relationships. This is why the world today is overwhelmed with
            conflict, competition, and exploitation.
          </p>

          <p className="paragraph">
            Yet every child has a natural curiosity and creativity. If that
            natural instinct is nurtured, if children get the space to learn
            freely, then they can develop their own understanding of life. True
            education means expanding the mind — not stuffing it with
            information.
          </p>

          <p className="paragraph">
            Nature-based education encourages children to observe, question,
            explore, and learn through experience. Whether through trees,
            rivers, animals, insects, the sky, or the earth — everything becomes
            a teacher. Such learning brings humility, discipline, compassion,
            and awareness. It helps the child develop a healthy moral and
            emotional character.
          </p>

          <p className="paragraph">
            The Mind Formation School works to awaken this natural inner power
            in every child. Here children learn not only from books but also
            from real-life experiences — farming, gardening, cleaning, group
            activities, meditation, art, creativity, problem-solving, and
            reflective practices. They develop confidence and independence
            through doing real work with their own hands.
          </p>

          <p className="paragraph">
            This school teaches that every person has a unique potential.
            Through self-discovery, children learn to recognize their strengths.
            They also learn social responsibility, cooperation, and peaceful
            coexistence. The aim is to build a balanced human being — physically
            strong, mentally pure, emotionally stable, and socially conscious.
          </p>

          <p className="paragraph">
            Our education system places importance on moral values, ethics,
            honesty, and simplicity. We want children to grow with awareness,
            not with fear. True freedom comes from understanding — not from
            rules or restrictions. Students here learn discipline not through
            punishment but through self-realization.
          </p>

          <p className="paragraph">
            The Mind Formation School believes that education should nurture
            peace, harmony, and love. Knowledge should not create arrogance;
            rather it should bring humility and clarity. That is why our
            learning process includes meditation, silence, reflection, and
            self-observation. These are essential for building a complete human
            being.
          </p>

          <p className="paragraph">
            The school believes: "Only when a person understands himself, can he
            truly understand the world."
          </p>

          <p className="paragraph">
            Students here receive life-oriented education. They learn to serve
            society — to help people, to take responsibility, and to grow a
            feeling of love for all living beings. Education is not limited to
            classrooms. Children learn from their surroundings and community
            life. They learn cooperation, empathy, and gratitude.
          </p>

          <p className="paragraph">
            They participate in farming, cleaning, cooking, and various
            constructive activities. These tasks help them develop both mind and
            body. Children learn to respect every form of work. This gives them
            inner strength and dignity.
          </p>

          <p className="paragraph">
            The unique aspect of our school is that students learn through joy.
            Classes are not pressure-filled; instead, they open the mind and
            enrich creativity. Whether through music, dance, drama, art,
            storytelling, or nature-activities — children's imagination blooms
            naturally.
          </p>

          <p className="paragraph">
            A child's mind is like soft clay. If shaped with care, love, and
            wisdom, it becomes beautiful. That is why our teachers treat each
            child with affection and patience. We recognize that every child
            learns at his or her own pace.
          </p>

          <p className="paragraph">
            The purpose of our education is not to produce competition but to
            awaken compassion. Modern society is full of stress and anxiety
            because competition has destroyed peace. Our school teaches children
            to cooperate, not to compete — to share, not to fight. This makes
            them emotionally stronger and more socially responsible.
          </p>

          <p className="paragraph">
            Our curriculum includes meditation, yoga, moral stories, nature
            studies, life-skills, and community service. The aim is to create
            children who are fearless, kind-hearted, self-reliant, and capable
            of thinking clearly.
          </p>

          <p className="paragraph">
            Ultimately, education should bring light — not confusion. It should
            make life beautiful, meaningful, and harmonious. Moner Unmesh
            Vidyalaya is committed to creating such human beings.
          </p>
          
          <p className="paragraph">
            In the Moner Unmesh (Unfolding of the Mind) school, more attention
            is paid to how interest increases in gathering knowledge, rather
            than just the storage of knowledge. To increase interest, an
            inquisitive mind is required. The mind exists in everyone; the work
            of Moner Unmesh School is to make that mind inquisitive. The primary
            and main reason for making the mind inquisitive is attraction. One
            object feels attraction toward another object. For every human,
            based on their genetic characteristics, attraction toward specific
            subjects lies dormant. Waking up this attraction toward necessary
            and good subjects within the child's mind through teaching is the
            main objective of the educator.
          </p>

          <p className="paragraph">
            Preparing a favorable environment where the seed of "desire to know"
            is planted in the soil of the child's mind, and from that seed, the
            sprout of "liking" emerges, is the alternative method to the
            prevalent education system. Children repeatedly search for the
            subjects they like. The main job of the educator is to increase the
            children's love for specific subjects, and Moner Unmesh School is a
            suitable environment for that.
          </p>

          <p className="paragraph">
            In this environment, continuous research and application are ongoing
            regarding how to increase children's attraction to subjects they
            like and how they can repeatedly try to obtain those liked subjects.
            The work of Moner Unmesh School is to follow the alternative
            education method which helps the student through
            "Practice-Habit-Instinct" (concepts derived from many formulas
            discovered through this research and practical methods). Even though
            there are many educational institutions in society and many have
            established themselves through education from there, the question
            may arise: why is there a need to run a school named Moner Unmesh
            for alternative education methods? As an answer, it can be said that
            the need for this type of school existed before, exists now, and
            will exist in the future. Some distinct features of the Moner Unmesh
            School, which has been built with the aim of imparting education
            through alternative methods, are highlighted below.
          </p>

          <h2 className="section-titles">
            First Specialty of Moner Unmesh School:
          </h2>

          <p className="paragraph">
            In institutional education, artificial education is provided which
            may lead to the acquisition of merit, but the education required to
            develop a child's mind and character is not possible within the
            infrastructure of this type of institutional education center. It is
            a very difficult task for one teacher to understand whether 30/40
            students (or in many cases 60/65 students) could grasp the lesson
            taught within just 35/40 minutes, or if they could grasp it at all.
          </p>

          <p className="paragraph">
            It is necessary to change the direction of certain aspects of every
            student's character. If society brings out the latent good qualities
            of the mind, it gets a good citizen; similarly, if the detrimental
            distinct qualities are suppressed, the social body is not harmed.
            Keeping a sharp eye on those characters and minds of the students,
            and giving them advice or discipline separately according to their
            needs, is a very difficult task for educational institutions within
            the current infrastructure. For this reason, alternative education
            methods are needed.
          </p>

          <p className="paragraph">
            Moner Unmesh School is an environment of this alternative education
            method. In this school, the student-teacher ratio at the primary
            level is 5:1. That is, one teacher will teach every 5 students.
            Here, education will take place in classrooms, but also in the shade
            of nature, under the sky, and in the lap of the teachers (Didis). Up
            to the primary level, these children will have no burden of books.
            To cause the "unfolding of the mind," it is more important to see
            how deeply the students could enter into a subject rather than how
            much education they received. Teachers realize how deeply a student
            has entered a subject and how much satisfaction they have gained by
            observing the expression on the student's face.
          </p>

          <p className="paragraph">
            For that reason, no specific time is fixed for any specific subject
            for the students of Moner Unmesh School. Therefore, teachers do not
            have to repeatedly look at the clock and force the students to
            concentrate on a segment of the mind due to time constraints. The
            teacher can dedicate their entire mind to teaching the students or
            building their merit. In this process, if the entire day passes
            while teaching 2 or 3 subjects, or even just one subject, the
            teachers do exactly that.
          </p>

          <h2 className="section-titles">
            Second Specialty of Moner Unmesh School:
          </h2>

          <p className="paragraph">
            Just as a tortoise retracts its head and legs inside its shell out
            of fear, if fear is shown or if a child is struck beyond their
            physical capacity to endure, their fear or interest in studying
            retracts. In the field of teaching or receiving education, no rules
            or compulsions are forced upon the minds of the education
            distributor and the students. This is a major characteristic of
            Moner Unmesh School. Applying force to a child's mind or displaying
            fear is the main obstacle to the unfolding of the child's mind. For
            this reason, showing fear to children or the method of using force
            is contrary to the policy of Moner Unmesh School.
          </p>

          <h2 className="section-titles">
            Third Specialty of Moner Unmesh School:
          </h2>

          <p className="paragraph">
            Here, children learn how to wake up that realization/sense—the
            realization through which they can understand the realization of
            others. The students here learn to search for the root of everything
            because if one keeps moving toward the root cause, conflict
            decreases. It is from conflict that violence, fighting, and
            destructive tendencies arise.
          </p>

          <h2 className="section-titles">
            Fourth Specialty of Moner Unmesh School:
          </h2>

          <p className="paragraph">
            This school does not encourage any religious education that narrows
            and pollutes the human mind, that hinders a human from becoming
            broad-minded, that is contrary to all fundamental education, and
            that prevents one from going toward the root purpose. Fundamental
            education means humans will love humans, have a sense of
            responsibility toward society, respect the noble teachings of all
            religions and follow them, but no encouragement is given to perform
            religious rituals. Knowing the cause-and-effect of everything to
            become free of superstition, having a commitment to the country,
            coming forward to help the distressed, thinking of the opposite sex
            peer as an equal and not destroying nature but maintaining harmony
            with it—knowing how to survive by saving nature and helping others
            to survive—that is education. How is a sense of responsibility
            created? How does one become thrifty? How to remain content with
            little? Using the formulas obtained from Moner Unmesh School's own
            research, discussing when to apply "Respect vs. Doubt,"
            understanding what needs to be done to stop waste—that is the
            education imparted here.
          </p>

          <h2 className="section-titles">
            Practical Strategies from Research Results at Moner Unmesh School.
          </h2>

          <h3 className="subsection-title">
            1) Strategy to Create a Sense of Responsibility in the Child's Mind:
          </h3>

          <p className="paragraph">
            Every day, two students have the responsibility to come before
            everyone else, open the main gate of the institution, open the doors
            and windows of all classrooms, and prepare a suitable environment
            for the school. In this task, the guard and other workers of the
            school will naturally assist. In this way, love and a sense of
            responsibility for the school will wake up. Gradually, the habit of
            fulfilling this responsibility toward their own home will also
            develop. In this way, a thought process of responsibility toward the
            home, then the village, then society, and then the country will
            continue to form. Once or twice a month, the complete responsibility
            of deciding what will be cooked for the school's midday meal is
            given to those two students so that love and responsibility for the
            school can sprout.
          </p>

          <h3 className="subsection-title">
            2) Strategy to Build Love and Service Mentality in the Child's Mind:
          </h3>

          <p className="paragraph">
            Groups of 2/3 students are formed, and each group is given a clay
            pot and told to plant a sapling in it. They are taught how to care
            for the sapling in the pot. Then, as that group cares for that
            sapling and raises it, they fall in love with the tree. In this way,
            through strategy, a habit of love and service is attempted to be
            developed within them. The aim of Moner Unmesh School is to
            implement such various real-life education methods alongside
            academic education to try and build complete human beings by causing
            the unfolding of their minds. This work method is not just published
            in booklet form to inform the public; one can understand that it is
            being implemented and is bearing fruit by visiting the Moner Unmesh
            School. Some pictures of Moner Unmesh School are given here. Reading
            this writing so far creates an imagination about the school; these
            pictures will provide the sensory response to that imagination.
          </p>

          <h2 className="section-titles">
            Some Practical Aspects of Alternative Education Methods at Moner
            Unmesh School:
          </h2>

          <p className="paragraph">
            The students of this school learn to enter into the root of
            everything. That is why, before doing Math, they learn: What is the
            root "Number"? What is this thing called Number? They learn that
            Number is something imaginary. Even though it is based on
            imagination, the attempt is made to solve all equations of this
            world using these imaginary numbers. Questions are awakened in their
            minds: When subtracting one number from another, if the value is
            taken, why is there a need for borrowing again? Then the question
            comes to their mind: Where is the difference between subtraction and
            division? They are learning when to add or what the method of
            multiplication is and when to apply it.
          </p>

          <p className="paragraph">
            While learning in this way, questions arise in their minds: Why does
            the spelling of a Bengali word use the retroflex 'Na' (ণ) instead of
            the dental 'Na' (ন)? Through Tongue Exercise, the students here have
            mastered how clarity comes in pronunciation by removing the inertia
            of the tongue. Tongue exercise is a yogic process which is likely
            not practiced in any other school. They are practicing how to
            correct the error of pronouncing 'Sa' (স) as 'Cha' (ছ) through
            Tongue Twisters. They have also mastered how to speak continuously
            for a long time with clear pronunciation through tongue twisters.
            Tongue exercise and Tongue twister are Moner Unmesh School's own
            research-based methods.
          </p>

          <p className="paragraph">
            Everyone has and will have wants and desires. We, the teachers or
            parents, also have these desires or wants. How to control these
            wants and make the path of life beautiful and thorn-free is also
            learned by the students from Moner Unmesh School. Above all, what is
            life? How to control it in which situation? How to run life to
            become a complete human being? This Moner Unmesh School is a stage
            for that education.
          </p>

          <h2 className="section-titles">
            The Subjects Moner Unmesh School Emphasizes in Teaching Methods:
          </h2>

          <p className="paragraph">
            1) The children of this school are taught: Why will they study
            alongside playing?
          </p>

          <p className="paragraph">
            2) Before teaching Math to children, they are taught: What is a
            Number? They are taught that playing with numbers is Math. They are
            taught the rules of playing with numbers. They are taught: Why will
            we learn Math? How will Math be useful in our work?
          </p>

          <p className="paragraph">
            3) What are Addition, Multiplication, Subtraction, and Division (and
            LCM, HCF, etc.)? What are the similarities or differences between
            them? The method of getting a total (total) number in the easiest
            way without adding the same number repeatedly is called
            Multiplication. Similarly, the easiest method of repeatedly
            excluding a small number from inside a large number is called
            Division. The easiest method to change an object of various
            measurements, time, or event into the same measurement is LCM
            (L.S.G). The easiest method to know how many pieces an object, time,
            or event of various measurements can be made into equal amounts is
            HCF (G.S.G). How will these additions, subtractions,
            multiplications, divisions, LCMs, and HCFs be useful in daily life?
            What are the formulas for spelling in Bengali?
          </p>

          <p className="paragraph">
            4) "Seeing and Observing" - Before teaching Science, they are
            taught: How has our communication with nature occurred? They are
            taught: How will we know the laws of nature? They are taught: What
            is the difference between seeing and observing?
          </p>

          <p className="paragraph">
            5) Nature Introduction - They will learn to know nature. How is
            nature helping us? How do trees and plants help us financially,
            physically, and mentally? To understand why we could not survive if
            animals and birds did not exist, and to get introduced to different
            animals and birds, they are taken to different forests and water
            bodies to be taught.
          </p>

          <p className="paragraph">
            6) Coexistence - What is the role of different animals and trees in
            nature? Why will we exchange with different animals and trees? What
            is their role in keeping us alive? Why will we save them? They will
            also learn that the rule of the Third Law discovered by physicist
            Isaac Newton is not limited only to matter; they will learn its
            importance and application method in real life too. If you love
            someone, you will get that love yourself, and if you give pain, you
            will get pain—they will receive the education that ensures they have
            this realization.
          </p>

          <p className="paragraph">
            7) "Being Human" School will be their second home of love.
            Therefore, the school will be their desired place for eating,
            sleeping, and playing. For the unfolding of the mind, the warm, soft
            love of mother, father, or grandparents is needed most. Therefore,
            the need to be with parents or grandparents will be fulfilled at
            school in the morning. Honest, truthful, polite, educated children
            may be created, but family bonds might loosen. If they are not
            within a family, how will the unfolding of the mind happen
            completely? They will also master the techniques here of how to
            cause the unfolding of the mind through love and responsibility.
          </p>

          <p className="paragraph">
            8) How to increase mental strength through Asanas and Pranayama is
            also taught here.
          </p>

          <p className="paragraph">
            9) "We want more, we want more"—Understanding the root of most
            problems is "more wanting," and they will learn the methods of how
            to keep this type of greed under control. Along with bookish
            knowledge, they will learn through yogic methods how to keep the
            mind and body strong and under their own control. How the mentality
            of "wanting more and more" destroys the cooperative mentality solely
            for the sake of controlling the mind, and how the competitive
            mentality to achieve success leads society silently toward
            destruction—they will be made to understand this as well. Thinking
            "we want more, we want more," running around, and how to be content
            with a little—that education is given to the students here. They are
            also given academic education so that they practice this theory and
            try to apply it in life. (A trend is seen among students of the
            current era where they sink into depression or choose the path of
            suicide after failing exams or not getting expected results after
            running after "wanting more" expectations)—academic education is
            given alongside that education [to prevent this].
          </p>

          <p className="paragraph">
            10) Moral education lessons are not just kept within memorization
            but are also taught regarding how to follow them and when to apply
            them. The students here will also master the techniques of how to
            handle situations without running away from problems while keeping
            mental strength firm even in the most difficult situations.
          </p>

          <p className="paragraph">
            11) "Education every day, examination every day"—this is the
            language of Moner Unmesh.
          </p>

          <p className="paragraph">
            12) Along with academic education, the students of this school will
            become proficient in Yoga, the lost Indian martial art of Lathi
            Khela (stick fighting), wrestling, and computers along with English
            education to walk in step with modern education for physical and
            mental improvement.
          </p>

          <p className="paragraph">
            13) "The Necessity of Ego"—When to use ego and when to suppress
            it—they will get that education from here.
          </p>

          <p className="paragraph">
            14) "Sense of Responsibility, Sense of Duty"—The children of this
            school will assimilate what duties to perform toward oneself, one's
            own home, society, and the country.
          </p>

          <p className="paragraph">
            15) Above all, this is a living laboratory. Not just academic
            education, but they will also receive education here on how to build
            a philosophy of life and walk in rhythm with reality.
          </p>

          <h2 className="section-titles">
            Rules and Regulations of Moner Unmesh School:
          </h2>

          <p className="paragraph">
            1) There will be 4 days of holidays per month in Mind Formation
            School. Two days of Ekadashi, one day of Amavasya (New Moon), and
            one day of Purnima (Full Moon)—totaling 4 days of holidays in a
            month. Additionally, all holidays according to government rules will
            be applicable here.
          </p>

          <p className="paragraph">
            2) Every day, school will start at 8 AM and break will be at 2 PM.
          </p>

          <p className="paragraph">
            3) At 12 PM in the school dining hall, there will be a half-hour
            rest after the midday meal provided by the school.
          </p>

          <p className="paragraph">
            4) At the primary level, students must come to school every day
            wearing the clean uniform provided by the school.
          </p>

          <p className="paragraph">
            5) Students must be present in school for 90% of the days the school
            is open.
          </p>

          <p className="paragraph">
            6) Staying absent from school is not allowed except for special
            illness or any special accident at home.
          </p>

          <p className="paragraph">
            7) Once arrived at school, one cannot go outside the school before
            the final break. If any special situation arises, leaving may be
            considered subject to the permission of the authorities to handle
            that situation.
          </p>

          <p className="paragraph">
            8) A government-degreed doctor will record the physical and mental
            development of every student of the school every month. Primary
            physical treatment will be done from the school itself.
          </p>

          <p className="paragraph">
            9) Arrangements will be made for the students of this school to take
            Madhyamik (Secondary) and Higher Secondary examinations from another
            school. Students of the school at the primary level will not study
            with any other tutor.
          </p>

          <p className="paragraph">
            10) Judging the merit of every student, help will be provided in
            selecting their future career.
          </p>

          <p className="paragraph">
            11) Arrangements for financial assistance (not a promise) will be
            made for higher education according to merit and for preparation for
            higher education.
          </p>

          <p className="paragraph">
            12) This school does not arrange for students' education in exchange
            for any money or material help from parents.
          </p>

          <p className="paragraph">
            13) The same student cannot study in two schools simultaneously.
            This rule applies here as well.
          </p>

          <p className="paragraph">
            14) The school authorities will supply all necessary materials for
            primary level education to the students for studying at school.
          </p>

          <p className="paragraph">
            15) Every month, the teachers of the school will also be evaluated
            on how much and how they are presenting themselves as teachers to
            the students. Does their method of teaching increase the students'
            interest? Students' opinions will also be taken in the method of
            evaluating teachers.
          </p>

          <p className="paragraph">
            16) In this school, there will be no obligation to move to the next
            class through annual examinations. This school will follow the
            government curriculum. Additionally, students will learn according
            to the curriculum created by the school authorities. Only when the
            curriculum is finished will that student get the opportunity to
            study in the next class. In this way, one may get the opportunity to
            study in the next class within one year. Again, if the curriculum is
            not finished within one year, they may have to stay in the same
            class for two years.
          </p>

          <p className="paragraph">
            17) If improvement is observed in teachers during three consecutive
            teaching evaluations, they will be given an incentive allowance; on
            the other hand, if a decline is observed in teaching evaluation,
            their incentive allowance will be cancelled.
          </p>

          <p className="paragraph">
            18) The school will consider all these students as its own children
            and through providing education in that manner, will help them
            become not only degree-holders but honest, active, and humans with
            firm mental strength. Trying to make them educated in this education
            is the sole objective of Moner Unmesh School.
          </p>
        </div>
      </div>
      <div className="intro">
        <div className="intro-title">
          <span>What is</span> <h3>Moner Unmesh</h3> <span>and why?</span>
        </div>
        <p>
          An alternative educational institution, believes that education is not
          complete merely with books, notebooks, schools, colleges, and
          teachers. True learning requires a mind that is eager to grow —
          because it is only mind that learns. Connecting the mind with a
          subject for as long as it wishes is what we call learning. Therefore,
          education requires a mind that is oriented toward growth.
        </p>
        <p>
          Every living being has a mind. But except for humans, the minds of
          other creatures are comparatively less developed. That is why
          lower-order animals can learn relatively little. Whatever they need
          for survival, they are born already knowing. Let us understand this
          idea of “learning before birth” through a few examples.
        </p>

        <p>
          For instance, sea turtles travel hundreds of miles to a beach, dig
          holes in the sand, lay eggs, cover them back with sand, and return to
          the sea. When the hatchlings emerge, they do not wander into villages
          but instinctively return to the sea. The question is—who taught those
          baby turtles to go back to the ocean? Their mothers certainly didn’t
          teach them. They are simply born with that knowledge.
        </p>

        <p>
          Similarly, mosquito mothers do not teach their babies how to drink
          blood. Yet after birth, instead of sipping flower nectar, mosquito
          larvae grow up into adults that instinctively seek blood. They do not
          learn it; they are born with this knowledge. Their minds are extremely
          underdeveloped and hence incapable of learning in the human sense.
        </p>

        <p>
          A two-month-old human child, on the other hand, if given soil in one
          hand and a sweet in the other, will put both into its mouth. Unlike
          the turtle or the mosquito, a human baby is not born knowing what is
          edible and what is not. The mother teaches the child these things. The
          mechanism humans use to learn is the mind — it is the mind that
          learns. Connecting the mind with the subject matter is what learning
          truly means.
        </p>

        <p>
          Moner Unmesh helps cultivate this ability to connect the mind with any
          subject. It does not "teach" in the conventional sense. Instead, it
          helps students master the method of connecting their minds to the
          subject matter. Through an alternative education system, Moner Unmesh
          develops the child’s mind to make it suitable for learning. The
          ability to maintain mental connection with a subject grows through
          continual practice.
        </p>

        <p>
          Using its own research-based methods, Moner Unmesh helps students
          develop their minds. Its unique theories guide students in mastering
          the process of connecting their minds to the subject matter. In
          reality, it is the students themselves who learn.
        </p>

        <p>
          In conventional education systems, students are often forced to
          memorize content. Only those who naturally have the ability to connect
          their minds to subjects truly learn. Traditional institutions neither
          discuss nor guide students in developing this mental-connection
          process. This is the fundamental difference — and the special quality
          — that sets Moner Unmesh apart from conventional education systems.
        </p>
      </div>
      <div className="page-container">
        <div className="document-wrapper">
          <div className="header">
            <div className="header-title">
              <h1>Moner Unmesh</h1>
            </div>
            <p className="header-subtitle">Spirit of Learning and Growth</p>
            <p className="header-description">
              An Alternative Education Approach
            </p>
          </div>

          <div className="content">
            <section>
              <h2 className="section-title">
                Education System and the Appeared Gaps in Our Country
              </h2>

              <div className="text-content">
                <p>
                  Many education initiatives have been implemented by
                  Government, NGOs and business houses throughout India since
                  Independence. It has had its impact and school enrollment has
                  increased above 90%. Yet, many would agree that the country is
                  far from achieving universal primary education - a scenario
                  where all children go to school regularly and learn
                  sufficiently. It is not about numbers of school enrolled but
                  students learning achievement.
                </p>

                <p>
                  Modern education system teaches with the purpose to score high
                  grades, but does not provide the in-depth knowledge on the
                  subject or its application in daily life. To give an example
                  when asked to teachers of secondary standard on the difference
                  between addition, subtraction, multiplication and division,
                  why the LCM is done with the denominator of dividend, why we
                  multiply length and breadth to find area and not sum up to
                  find the area. Do we know when to apply which alphabet in
                  spelling? A child, clear with all these aspects will find
                  subjects interesting and have a stronger base for higher
                  education.
                </p>

                <p>
                  Parents on the other side also don't know how to guide
                  children. Often parents say to pay attention towards studies
                  but never say how to pay attention to studies.
                </p>
              </div>
            </section>

            <section className="highlight-section">
              <div className="section-header">
                <h2>About Moner Unmesh School</h2>
              </div>

              <div className="text-content">
                <p>
                  Moner Unmesh School is modeled after the ancient Gurukul
                  system of India, where students traditionally lived with their
                  teachers to learn. Here, tribal children receive education
                  through the Vedic method alongside modern educational
                  practices. The school believes that education is the process
                  of removing the obstacles that prevent us from understanding
                  the outer or inner world. The teachers at Moner Unmesh work to
                  remove these obstacles before teaching subjects like numbers
                  or mathematics. They first help students understand the
                  difference between addition and multiplication, and
                  subtraction and division, before diving into calculations.
                </p>

                <p>
                  At this school, one teacher educates a maximum of 20 students
                  aged between 5 and 8 years. Through Moner Unmesh's unique
                  hands-on learning approach, students follow the modern
                  curriculum while discovering the essence of each subject. This
                  method encourages students to learn not just the material but
                  also to understand it by fostering self-respect. They learn to
                  value both self-respect and the respect of others.
                </p>

                <div className="callout-box">
                  <p className="callout-text">
                    Core Philosophy: Cooperation over Competition
                  </p>
                </div>

                <p>
                  Students are guided by this mantra. Only children from the
                  tribal Santali community attend this school. For many of these
                  children, mostly from underprivileged families, it is the
                  first time they experience formal education. Many are the
                  first in their families to go to school. Therefore, the school
                  provides midday meals, uniforms, books, and learning
                  materials.
                </p>
              </div>
            </section>

            <section>
              <div className="text-content">
                <p className="emphasis-text">
                  Thus, Moner Unmesh School not only ensures education for
                  children but also supports families in overcoming financial
                  challenges, giving equal importance to both learning and
                  livelihood.
                </p>
              </div>
            </section>

            <section className="strategy-section">
              <div className="section-header">
                <h2>Teaching Strategy</h2>
              </div>

              <div className="text-content">
                <p>
                  This project works individually with each child, to increase
                  their concentration, mindfulness towards education through
                  YOGA along with providing knowledge on the base knowledge of
                  each subject. Children will be taught about life, life skills,
                  will be motivated with the lives of legends and also not so
                  successful person. Audio-video teaching aids will be used to
                  create more interest. Teaching will take place in nature
                  living in close vicinity of nature.
                </p>

                <div className="strategy-objectives">
                  <h3>Teaching Objectives Focus On:</h3>
                  <div className="objectives-grid">
                    <div className="objective-card">
                      Making children understand the importance of Education in
                      life.
                    </div>
                    <div className="objective-card">
                      Why learn Mathematics and how we can apply mathematics in
                      our life.
                    </div>
                    <div className="objective-card">
                      Understanding addition, subtraction, multiplication and
                      division concepts.
                    </div>
                    <div className="objective-card">
                      The formula behind the spelling of every Bengali word.
                    </div>
                    <div className="objective-card">
                      Learn about nature: birds, animals, plants, waterbody.
                    </div>
                    <div className="objective-card">
                      Role of different plants and animals in nature.
                    </div>
                    <div className="objective-card">
                      How to unfold mind and increase Thinking power.
                    </div>
                    <div className="objective-card">
                      Mind power with Yoga and breathing exercise.
                    </div>
                    <div className="objective-card">
                      Minimize wants and concentrate on expectations.
                    </div>
                    <div className="objective-card">
                      Different ethics and uses in everyday life.
                    </div>
                    <div className="objective-card">
                      Learn by testing it everyday.
                    </div>
                    <div className="objective-card">
                      Physical exercise, sports, wrestling, martial arts.
                    </div>
                    <div className="objective-card">
                      English and computer skills for today's world.
                    </div>
                    <div className="objective-card">
                      Prepare for self, family and duty towards nation.
                    </div>
                    <div className="objective-card">
                      How to use pride, ego and self-esteem.
                    </div>
                  </div>
                </div>

                <div className="quote-box">
                  <p>Our Belief: "EVERYDAY LEARNING & TEST EVERYDAY"</p>
                </div>

                <p className="closing-statement">
                  This will be alive experiment on how wholesome education can
                  build the mind of children and build them ready for today's
                  world.
                </p>
              </div>
            </section>

            <div className="footer">
              <p>
                Our Slogan: "SPIRIT OF LEARNING AND GROWTH THROUGH COOPERATION,
                NOT COMPETITION"
              </p>
            </div>

            <button
              className={`scroll-to-top ${showButton ? "show" : ""}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link