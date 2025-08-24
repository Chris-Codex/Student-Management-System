import { useEffect, useState } from "react";
import { supabase } from "../util/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

  }, []);

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return <Navigate to="/" replace/>
  }

  return children;
};

export default ProtectedRoute;
