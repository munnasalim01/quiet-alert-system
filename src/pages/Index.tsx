import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Volume2, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAlarming, setIsAlarming] = useState(false);
  const [alarmCount, setAlarmCount] = useState(0);
  const { toast } = useToast();

  const triggerUselessAlarm = (type: string) => {
    setIsAlarming(true);
    setAlarmCount(prev => prev + 1);
    
    // Play loud sound (the opposite of silent)
    const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH8N2QQAoUXrTp66hVFApGn+Dyvmk4CB1+zPrOdi0FJHfH");
    audio.play().catch(() => {});
    
    // Show obnoxious toast
    toast({
      title: "🚨 SILENT ALARM ACTIVATED! 🚨",
      description: `This is your ${alarmCount === 1 ? "first" : alarmCount + "th"} COMPLETELY SILENT emergency! Nobody will ever know!`,
      duration: 5000,
    });

    // Flash the screen
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "";
      setIsAlarming(false);
    }, 1000);

    // Send notification to "emergency contacts"
    setTimeout(() => {
      alert(`🔊 LOUD NOTIFICATION: "${type}" alarm sent to:\n- Your Mom (555-0123)\n- Pizza Place (555-PIZZA)\n- That guy from high school (555-AWKWARD)\n\nMessage: "HELP! I pressed a button and now everyone knows!"`);
    }, 2000);
  };

  useEffect(() => {
    // Auto-trigger random alarms
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 30 seconds
        triggerUselessAlarm("Accidental");
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const emergencyContacts = [
    { name: "Mom", number: "555-0123", relation: "Will lecture you" },
    { name: "Pizza Palace", number: "555-PIZZA", relation: "Actually useful" },
    { name: "Ex-Boyfriend", number: "555-DRAMA", relation: "Blocked you" },
    { name: "Boss", number: "555-WORK", relation: "Will fire you" },
  ];

  const recentAlarms = [
    { time: "2 minutes ago", type: "False Emergency", status: "Everyone notified" },
    { time: "5 minutes ago", type: "Accidental", status: "Woke up neighbors" },
    { time: "10 minutes ago", type: "Testing", status: "Called 911 by mistake" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-destructive flex items-center justify-center gap-2">
            <Volume2 className="h-8 w-8" />
            "Silent" Alarm System
          </h1>
          <p className="text-muted-foreground">The world's loudest silent alarm! Now with 100% more visibility!</p>
          <Badge variant="destructive" className="animate-pulse">
            COMPLETELY USELESS
          </Badge>
        </div>

        {/* Main Alarm Panel */}
        <Card className="border-2 border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Emergency Response Center</span>
              {isAlarming && (
                <Badge variant="destructive" className="animate-bounce">
                  LOUDLY ALERTING EVERYONE!
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="destructive"
                size="lg"
                className="h-20 text-lg animate-pulse"
                onClick={() => triggerUselessAlarm("Medical Emergency")}
              >
                <AlertTriangle className="h-6 w-6 mr-2" />
                Medical (Loud)
              </Button>
              
              <Button
                variant="destructive"
                size="lg"
                className="h-20 text-lg animate-pulse"
                onClick={() => triggerUselessAlarm("Security Alert")}
              >
                <Volume2 className="h-6 w-6 mr-2" />
                Security (Louder)
              </Button>
              
              <Button
                variant="destructive"
                size="lg"
                className="h-20 text-lg animate-pulse"
                onClick={() => triggerUselessAlarm("Fire Emergency")}
              >
                🔥 Fire (Loudest)
              </Button>
              
              <Button
                variant="destructive"
                size="lg"
                className="h-20 text-lg animate-pulse"
                onClick={() => triggerUselessAlarm("General Help")}
              >
                📢 Help (Deafening)
              </Button>
            </div>
            
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Alarms triggered: <Badge variant="outline">{alarmCount}</Badge>
              </p>
              <p className="text-xs text-destructive">
                ⚠️ Warning: This alarm is so silent, everyone will hear it!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              "Emergency" Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.number}</p>
                  </div>
                  <Badge variant="outline">{contact.relation}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alarms */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent "Silent" Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlarms.map((alarm, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{alarm.type}</p>
                    <p className="text-sm text-muted-foreground">{alarm.time}</p>
                  </div>
                  <Badge variant="destructive">{alarm.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Disclaimer: This alarm is about as silent as a fire truck in a library
          </p>
          <p className="text-xs text-destructive">
            💡 Pro tip: For actual emergencies, try calling 911 instead of using this app
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
