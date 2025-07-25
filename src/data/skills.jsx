import ReactJs, { Bash, Bootstrap, C, CPlusPlus, CSS, Docker, ExpressJS, Airflow, Git, GitHub, AzureIcon, HTML, Java, Prometheus, JS, Kubernetes, TerragruntLogo, MongoDB, MySQL, NextJs, NodeJS, PostGreSql, Python, TailwindCSS, VSCode, AWS, Ansible, Kafka, GithubActions, Grafana, Jira, Serverless, Nginx, Terraform, Jenkins } from "../components/SkilIcons";

const skills = [
    // Cloud Platforms
    {
        id: 1,
        icon: <AWS />,
        name: "AWS",
        style: {
            shadow: "shadow-[#FF9902]",
            cover: "from-black to-[#FF9902] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 2,
        icon: <AzureIcon />,
        name: "Azure",
        style: {
            shadow: "shadow-[#0078D4]",
            cover: "from-black to-[#0078D4] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Infrastructure as Code
    {
        id: 3,
        icon: <Terraform />,
        name: "Terraform",
        style: {
            shadow: "shadow-[#5C4EE5]",
            cover: "from-black to-[#5C4EE5] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 4,
        icon: <TerragruntLogo />,
        name: "Terragrunt",
        style: {
            shadow: "shadow-[#5C4EE5]",
            cover: "from-black to-[#5C4EE5] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 5,
        icon: <Serverless />,
        name: "Serverless",
        style: {
            shadow: "shadow-[#FD5750]",
            cover: "from-black to-[#FD5750] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Containerization & Orchestration
    {
        id: 6,
        icon: <Docker />,
        name: "Docker",
        style: {
            shadow: "shadow-[#0091E2]",
            cover: "from-black to-[#0091E2] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 7,
        icon: <Kubernetes />,
        name: "Kubernetes",
        style: {
            shadow: "shadow-[#326DE6]",
            cover: "from-black to-[#326DE6] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // CI/CD & Automation
    {
        id: 8,
        icon: <GithubActions />,
        name: "GitHub Actions",
        style: {
            shadow: "shadow-[#2088FF]",
            cover: "from-black to-[#2088FF] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        icon: <Jenkins />,
        name: "Jenkins",
        style: {
            shadow: "shadow-[#D33833]",
            cover: "from-black to-[#D33833] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 10,
        icon: <Ansible />,
        name: "Ansible",
        style: {
            shadow: "shadow-[#EE0000]",
            cover: "from-black to-[#EE0000] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Monitoring & Observability
    {
        id: 11,
        icon: <Prometheus />,
        name: "Prometheus",
        style: {
            shadow: "shadow-[#E6522C]",
            cover: "from-black to-[#E6522C] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 12,
        icon: <Grafana />,
        name: "Grafana",
        style: {
            shadow: "shadow-[#F46800]",
            cover: "from-black to-[#F46800] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Programming Languages
    {
        id: 13,
        icon: <Python />,
        name: "Python",
        style: {
            shadow: "shadow-[#3776AB]",
            cover: "from-black to-[#3776AB] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 14,
        icon: <CPlusPlus />,
        name: "C++",
        style: {
            shadow: "shadow-[#00599C]",
            cover: "from-black to-[#00599C] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 15,
        icon: <C />,
        name: "C",
        style: {
            shadow: "shadow-[#A8B9CC]",
            cover: "from-black to-[#A8B9CC] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Databases
    {
        id: 16,
        icon: <MySQL />,
        name: "MySQL",
        style: {
            shadow: "shadow-[#4479A1]",
            cover: "from-black to-[#4479A1] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 17,
        icon: <PostGreSql />,
        name: "PostgreSQL",
        style: {
            shadow: "shadow-[#336791]",
            cover: "from-black to-[#336791] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 18,
        icon: <MongoDB />,
        name: "MongoDB",
        style: {
            shadow: "shadow-[#47A248]",
            cover: "from-black to-[#47A248] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Web Technologies
    {
        id: 19,
        icon: <ReactJs />,
        name: "React",
        style: {
            shadow: "shadow-[#61DAFB]",
            cover: "from-black to-[#61DAFB] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 20,
        icon: <NodeJS />,
        name: "Node.js",
        style: {
            shadow: "shadow-[#339933]",
            cover: "from-black to-[#339933] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 21,
        icon: <HTML />,
        name: "HTML5",
        style: {
            shadow: "shadow-[#E34F26]",
            cover: "from-black to-[#E34F26] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 22,
        icon: <CSS />,
        name: "CSS3",
        style: {
            shadow: "shadow-[#1572B6]",
            cover: "from-black to-[#1572B6] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 23,
        icon: <Bootstrap />,
        name: "Bootstrap",
        style: {
            shadow: "shadow-[#7952B3]",
            cover: "from-black to-[#7952B3] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    // Version Control & Development Tools
    {
        id: 24,
        icon: <Git />,
        name: "Git",
        style: {
            shadow: "shadow-[#F05032]",
            cover: "from-black to-[#F05032] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 25,
        icon: <GitHub />,
        name: "GitHub",
        style: {
            shadow: "shadow-[#181717]",
            cover: "from-black to-[#181717] rounded-b-md",
            opacity: "opacity-80"
        }
    },


    // Additional Tools
    {
        id: 27,
        icon: <Bash />,
        name: "Bash",
        style: {
            shadow: "shadow-[#4EAA25]",
            cover: "from-black to-[#4EAA25] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 28,
        icon: <Nginx />,
        name: "Nginx",
        style: {
            shadow: "shadow-[#009639]",
            cover: "from-black to-[#009639] rounded-b-md",
            opacity: "opacity-80"
        }
    },
        {
        id: 27,
        icon: <Airflow />,
        name: "Apache Airflow",
        style: {
            shadow: "shadow-[#017CEE]",
            cover: "from-black to-[#017CEE] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 28,
        icon: <Kafka />,
        name: "Apache Kafka",
        style: {
            shadow: "shadow-[#231F20]",
            cover: "from-black to-[#231F20] rounded-b-md",
            opacity: "opacity-80"
        }
    }
];

export default skills;
