git log --pretty=oneline | sed 's/[^ ]* *//' > git_logs.txt

if [[ -f "git_logs_output.txt" ]]; then
  rm git_logs_output.txt
fi

while read text_line; do
  if [[ "$text_line" =~ "[🤖 DailyBot] New release to v" ]]; then
    break
  fi
  if [[ ! "$text_line" =~ "Merge branch 'main'" ]] && [[ ! "$text_line" =~ "Merge pull request" ]]; then
    echo "🚩 $text_line" >> git_logs_output.txt
  fi
done < git_logs.txt
