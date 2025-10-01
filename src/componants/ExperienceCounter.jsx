import { useEffect, useState } from "react";

export default function ExperienceCounter() {
  const [count, setCount] = useState(0);
  const target = 20; 

  useEffect(() => {
    let start = 0;
    const speed = 50; 
    const timer = setInterval(() => {
      start += 1;
      if (start > target) {
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.box}>
        <h2 style={styles.number}>{count}+</h2>
        <p style={styles.text}>سنوات من الخبرة</p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#f8f9fa",  
    padding: "50px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#fff",
    padding: "30px 50px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "'Cairo', sans-serif", 
  },
  number: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "#2c9c9d",   
    margin: "0",
  },
  text: {
    fontSize: "20px",
    color: "#555",
    marginTop: "10px",
  },
};
