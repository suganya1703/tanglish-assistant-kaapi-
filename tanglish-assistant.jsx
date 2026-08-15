import { useState, useRef, useEffect } from "react";
import { Mic, Send, Volume2, Loader2 } from "lucide-react";

const LOGO_SRC =
  "data:image/jpeg;base64,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";

const SYSTEM_PROMPT = `You are "Kaapi", a warm, friendly local assistant for Tamil Nadu users.

STRICT RULE: You must respond in Tanglish for EVERY reply - meaning you write Tamil words 
using English letters, mixed naturally with English words, exactly like how people actually 
text/speak in Coimbatore or Chennai. Do NOT reply in pure English. Do NOT use Tamil script (no தமிழ் letters).

Here are real examples of the exact style to match:

User: "What's the weather like tomorrow?"
Kaapi: "Naalaikku konjam mழை chance irukku nu weather app solludhu - umbrella eduthukonga, safe ah irrukum."
(write "mழை" as "mazhai" - always full Tanglish, no Tamil script)

User: "Set a reminder to call mom"
Kaapi: "Sari, amma ku call pannanumnu reminder vechiten. Evlo mani ku venum nu sollunga, adha vechiduren."

User: "I have a headache"
Kaapi: "Aiyo, thala vali ah? Konjam rest edunga, thanni nalla kudinga. Adhigama irundha doctor ah paarunga sari na."

User: "Tell me a joke"
Kaapi: "Hehe sollreṇ - Oru manidhan doctor kitta poi sonnaan 'doctor enakku epdiyum memory problem irukku'. Doctor sonnaru 'eppadinu irundhutu vandheenga?' 😄"

Keep replies short (2-4 sentences), casual, warm, practical. Mix in filler words naturally: 
"sari", "aama", "illa", "konjam", "romba", "nu", "dhaan", "irukku", "pannunga". 
Never lecture or sound like a formal AI - talk like a helpful local friend/shopkeeper would.`;

export default function TanglishAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Vanakkam! Naan Kaapi — ungaluku help pannura oru assistant. Enna venum sollunga!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const scrollRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) {
      setSpeechSupported(true);
      const recognition = new SR();
      recognition.lang = "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        setInput((prev) => (prev ? prev + " " + transcript : transcript));
      };
      recognition.onend = () => setListening(false);
      recognition.onerror = () => setListening(false);
      recognitionRef.current = recognition;
    }
  }, []);

  const toggleMic = () => {
    if (!speechSupported) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-IN";
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  };

  const sendMessage = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      const data = await response.json();
      const replyText =
        data?.content?.find((c) => c.type === "text")?.text ||
        "Sorry, konjam issue vandhuduchu. Try again pannunga.";

      setMessages((prev) => [...prev, { role: "assistant", text: replyText }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Oops, network issue. Konjam try pannunga again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Work Sans', sans-serif",
        background: "#FBF3E7",
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        padding: "24px 12px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Work+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #D9A62E55; border-radius: 4px; }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(197, 66, 39, 0.35); }
          70% { box-shadow: 0 0 0 12px rgba(197, 66, 39, 0); }
          100% { box-shadow: 0 0 0 0 rgba(197, 66, 39, 0); }
        }
        .mic-active { animation: pulse-ring 1.4s infinite; }
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-4px); opacity: 1; }
        }
        .typing-dot { animation: dot-bounce 1.2s infinite; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#FFFDF9",
          borderRadius: "20px",
          border: "1px solid #E8DCC8",
          boxShadow: "0 20px 50px -20px rgba(43, 27, 18, 0.25)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "640px",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#2B1B12",
            backgroundImage:
              "radial-gradient(circle at 8px 8px, rgba(217,166,46,0.18) 1.5px, transparent 0)",
            backgroundSize: "16px 16px",
            padding: "20px 22px",
            color: "#FBF3E7",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#FBF3E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
              border: "1.5px solid #D9A62E55",
            }}
          >
            <img
              src={LOGO_SRC}
              alt="Kaapi logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 700,
                fontSize: "19px",
                lineHeight: 1.1,
              }}
            >
              Kaapi
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#D9A62E",
                letterSpacing: "0.03em",
                marginTop: "2px",
              }}
            >
              tanglish assistant
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: m.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "10px 14px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user" ? "#C36F4A" : "#EFE4D1",
                  color: m.role === "user" ? "#FFFDF9" : "#2B1B12",
                  fontSize: "14.5px",
                  lineHeight: 1.5,
                }}
              >
                {m.text}
              </div>
              {m.role === "assistant" && i !== 0 && (
                <button
                  onClick={() => speak(m.text)}
                  style={{
                    marginTop: "4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#8A7150",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "11px",
                    padding: "2px",
                  }}
                  aria-label="Listen to reply"
                >
                  <Volume2 size={13} /> kelunga
                </button>
              )}
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex", gap: "4px", padding: "10px 14px" }}>
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="typing-dot"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#C36F4A",
                    display: "inline-block",
                    animationDelay: `${d * 0.15}s`,
                  }}
                />
              ))}
            </div>
          )}

        </div>

        {/* Input */}
        <div
          style={{
            padding: "14px 16px",
            borderTop: "1px solid #E8DCC8",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#FFFDF9",
          }}
        >
          <button
            onClick={toggleMic}
            disabled={!speechSupported}
            className={listening ? "mic-active" : ""}
            title={speechSupported ? "Voice input" : "Voice input not supported in this browser"}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background: listening ? "#C36F4A" : "#EFE4D1",
              color: listening ? "#FFFDF9" : "#5A4632",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: speechSupported ? "pointer" : "not-allowed",
              flexShrink: 0,
              opacity: speechSupported ? 1 : 0.4,
            }}
          >
            <Mic size={18} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type pannunga... (Tanglish la okay!)"
            style={{
              flex: 1,
              border: "1px solid #E8DCC8",
              borderRadius: "22px",
              padding: "10px 16px",
              fontSize: "14px",
              outline: "none",
              fontFamily: "'Work Sans', sans-serif",
              background: "#FBF3E7",
              color: "#2B1B12",
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              background: "#D9A62E",
              color: "#2B1B12",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              opacity: loading || !input.trim() ? 0.5 : 1,
              flexShrink: 0,
            }}
          >
            {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
          </button>
        </div>
      </div>
    </div>
  );
}
