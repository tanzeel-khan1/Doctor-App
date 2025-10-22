import { Clock, UserCheck, AlertCircle, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      icon: "Clock",
      title: "24/7 Availability",
      description:
        "Our team is available round the clock to provide emergency medical support whenever needed.",
      bgColor: "bg-sky-200",
      iconColor: "text-sky-600",
    },
    {
      icon: "UserCheck",
      title: "Qualified Doctors",
      description:
        "Our experienced doctors ensure personalized care and professional treatment for every patient.",
      bgColor: "bg-sky-200",
      iconColor: "text-teal-600",
    },
    {
      icon: "AlertCircle",
      title: "Emergency Services",
      description:
        "Immediate response to critical cases with advanced emergency facilities and quick action teams.",
      bgColor: "bg-sky-200",
      iconColor: "text-pink-600",
    },
    {
      icon: "Activity",
      title: "Advanced Equipment",
      description:
        "We use modern and high-precision medical equipment for accurate diagnosis and treatment.",
      bgColor: "bg-sky-200",
      iconColor: "text-yellow-600",
    },
  ];

  const iconMap = {
    Clock,
    UserCheck,
    AlertCircle,
    Activity,
  };

  return (
    <div className="flex flex-wrap gap-6 p-8 min-h-screen items-center justify-center">
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon] || Clock;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`${service.bgColor} rounded-lg shadow-md p-6 h-72 w-64 hover:shadow-lg transition-shadow duration-300 hover:bg-[#C7F2FF]`}
          >
            <div className="flex flex-col items-center text-center">
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
