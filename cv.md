# Akmarzhan Abylay 

> akmarzhan@minerva.kgi.edu | +8 708 823 47 13 | [GitHub](https://github.com/akmarzhan1)

Aspiring junior computer science student with a desire and curiosity to learn and discover novel solutions to existing problems. Had various experiences as a programming tutor and completed project in data science and causal inference, computer vision, artificial intelligence algorithms and web development-related fields. 
# Education

**Minerva Schools at KGI** 
```
September 2018 - May 2022
```

*Candidate for Bachelor of Computational Sciences*

* Acquired basic research, problem-solving, and critical thinking skills in a dexterous community.
* **Coursework**: Research Analyses, Data Science & Statistics, Artificial Intelligence Algorithms.
  * CS162 (Software Development: Building Powerful Applications)
  * CS164 (Optimization Methods)
  * CS156 (Machine Learning for Science and Profit)
  * CS111B (Linear Mathematical Systems)
  * CS112 (Knowledge: Information Based Decisions)
  * CS152 (Harnessing Artificial Intelligence Algorithms)
  * CS50&CS51 (Formal Analyses, Intro to CS)

# Projects 

**[K-pop idol recognition tool](https://github.com/akmarzhan1/Projects/blob/main/%5BFinal%5D%20K-pop%20Idol%20Recognition%20Tool.pdf)**

```
November 2020 - December 2020:  London, United Kingdom
```

*Coding (Computer Vision)*

* Coded a working tool that detects and recognizes k-pop idols’ faces in music videos in 
real-time given 10-15 input pictures.
* Implemented fine-tuning with deep neural networks and convolutional neural networks  (CNN) to achieve 70% and 90% accuracy, respectively. 

**[Manual Neural Networks](https://github.com/akmarzhan1/Projects/blob/main/%5BFinal%5D%20Manual%20Neural%20Networks.pdf)**

```
November 2020 - December 2020:  London, United Kingdom
```

*Coding (AI and Neural Networks)*

* Created an OOP-based manual neural network model for simple 2d dataset classification. 
* Achieved a 100% accuracy within the first 5000 iterations.
* Explained the full maths behind deep neural networks (e.g., forward/backward 
propagation using chain rules).

**[Shortest Path Line Maze Solver](https://github.com/akmarzhan1/Projects/blob/main/%5BFinal%5D%20Shortest%20Path%20Maze%20Solver.pdf)**
```
April 2020 - May 2020: Buenos Aires, Argentina
```
*Coding (Robotics)*

* Projected and assembled an AI-driven robot using Arduino UNO and Motor Driver Shield.
* Coded a shortest path solving algorithm in Arduino IDE using the Adafruit library and the  left-hand rule heuristic to achieve successful execution.

**[Expert System for COVID-19 assessment](https://github.com/akmarzhan1/Projects/blob/main/Expert%20System.pdf)**
```
April 2020 - May 2020: Buenos Aires, Argentina
```
*Coding (Formal Logic)*

* Created an expert system for COVID-19 detection using SWI-Prolog and Python.
* Extended the system to include GUI using Tkinter.

## Experience

 **Business School KNU** 

```
September 2020 - February 2021: Remote
```

*Designer*

* Designed 50+ speaker, conference, story, and workshop template posters using Procreate  
* Consulted with a group of 5 members to generate the most effective and aesthetically  pleasing designs for Instagram, Facebook and VK


**Nestle**
```
January 2020 - April 2020: Buenos Aires, Argentina
```
*Coding (Data Scientist & Consultant)*

* Created a report on sustainable packaging of KitKats based on 20+ researched papers. 
* Led a group of 4 people to come up with 5+ solutions to the plastic packaging problem.


**Hanyang Environmental Engineering Lab** 
```
September 2019 - December 2019: Seoul, South Korea 
```
*Lab & Research Intern*

* Explored photocatalysts’ use in wastewater treatment by analyzing 50+academic papers on the 
topic and performing thorough data analysis.
* Created a solar cell, and synthesized 10+ nanocomposite photocatalysts.
* Achieved a 99% filtering efficiency on a methylene blue solution through the synthesis of 
titanium dioxide nanocomposite.


**LifeGyde**
```
January 2019 - June 2019: San Francisco, CA
```
*Entrepreneur in Residence & Research Assistant*

* Developed an interactive user interface (UI) for a company website (landing and sign up page)  that collects and interprets data using bubble.is.
* Led 10 brand ambassadors to facilitate research on 600+ engineering clubs in top colleges and  500+ university recruiters - the company’s future partners/clients.

**PerfectFit Pointe** 

```
September 2018 - May 2019: San Francisco, CA
```
*Research Assistant*

* Developed a logistic regression model that classifies which of the 27 fitted pointe shoes would  match the ballet dancer best based on the 10 inputted foot measurements. 
* Constructed an extensive report on the most important feet measurements based on researching and analyzing 200+ scholarly articles.

## Skills

**Technical Skills**: Python, SQL, R, Sage, LaTeX, STATA.

**Basic Skills**: Autodesk Meshmixer, Blender, Tinkercad, HTML, CSS, JavaScript, Git.

**Languages**: Kazakh, Russian - Bilingual proficiency; English - Professional working proficiency (IELTS 8.0 in 2018, after that studied in a US-based university with all courses in English).

**Sample Code**: Simple neural network transfer learning.

```python
#loading the original VGGFace model without the top
vgg = VGGFace(include_top=False, input_shape=(224, 224, 3))

#setting the few layers as non-trainable because they usually capture #the universal features that might be needed for our task too
for layer in vgg.layers:
  layer.trainable = False last_layer = vgg.output

#building new layers for preventing overfitting
x = Flatten(name='flatten')(last_layer) out = Dense(7, activation='softmax')(x)
model = Model(vgg.input, out)

```
