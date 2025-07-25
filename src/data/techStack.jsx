import ReactJs, { AWS, Terraform, Jenkins, Git, Kubernetes, Docker, Python, CPlusPlus, C, MySQL, PostGreSql, MongoDB, Ansible, GithubActions, Prometheus, Grafana, AzureIcon, Serverless } from "../components/SkilIcons"


const iconStyle = {
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TechStack = [
  {
    id: 1,
    icon: <div style={iconStyle}><AWS /></div>,
    name: "AWS",
  },
  {
    id: 2,
    icon: <div style={iconStyle}><AzureIcon /></div>,
    name: "Azure",
  },
  {
    id: 3,
    icon: <div style={iconStyle}><Terraform /></div>,
    name: "Terraform",
  },
  {
    id: 4,
    icon: <div style={iconStyle}><Docker /></div>,
    name: "Docker",
  },
  {
    id: 5,
    icon: <div style={iconStyle}><Kubernetes /></div>,
    name: "Kubernetes",
  },
  {
    id: 6,
    icon: <div style={iconStyle}><Jenkins /></div>,
    name: "Jenkins",
  },
  {
    id: 7,
    icon: <div style={iconStyle}><GithubActions /></div>,
    name: "GitHub Actions",
  },
  {
    id: 8,
    icon: <div style={iconStyle}><Ansible /></div>,
    name: "Ansible",
  },
  {
    id: 9,
    icon: <div style={iconStyle}><Prometheus /></div>,
    name: "Prometheus",
  },
  {
    id: 10,
    icon: <div style={iconStyle}><Grafana /></div>,
    name: "Grafana",
  },
  {
    id: 11,
    icon: <div style={iconStyle}><Python /></div>,
    name: "Python",
  },
  {
    id: 12,
    icon: <div style={iconStyle}><CPlusPlus /></div>,
    name: "C++",
  },
  {
    id: 13,
    icon: <div style={iconStyle}><C /></div>,
    name: "C",
  },
  {
    id: 14,
    icon: <div style={iconStyle}><MySQL /></div>,
    name: "MySQL",
  },
  {
    id: 15,
    icon: <div style={iconStyle}><PostGreSql /></div>,
    name: "PostgreSQL",
  },
  {
    id: 16,
    icon: <div style={iconStyle}><MongoDB /></div>,
    name: "MongoDB",
  },
  {
    id: 17,
    icon: <div style={iconStyle}><ReactJs /></div>,
    name: "React",
  },
  {
    id: 18,
    icon: <div style={iconStyle}><Serverless /></div>,
    name: "Serverless",
  },
  {
    id: 19,
    icon: <div style={iconStyle}><Git /></div>,
    name: "Git",
  },
]


export default TechStack;

