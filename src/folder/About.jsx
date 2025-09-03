import { Clock, UserCheck, AlertCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      icon: Clock,
      title: "24 Hours Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "bg-white",
      iconColor: "text-teal-400",
    },
    {
      icon: UserCheck,
      title: "Qualified Doctor",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "bg-white",
      iconColor: "text-teal-400",
    },
    {
      icon: AlertCircle,
      title: "Emergency Care",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "bg-white",
      iconColor: "text-teal-400",
    },
    {
      icon: Activity,
      title: "Operation Theater",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "bg-white",
      iconColor: "text-teal-400",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-8 min-h-screen items-center justify-center">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`${service.bgColor} rounded-lg shadow-md p-6 h-72 w-64 hover:shadow-lg transition-shadow duration-300  hover:bg-[#C7F2FF]`}
          >
            <div className="flex flex-col items-center text-center ">
              <div className="mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${
                    service.bgColor === "bg-sky-200" ? "bg-white" : "bg-teal-50"
                  } flex items-center justify-center`}
                >
                  <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
